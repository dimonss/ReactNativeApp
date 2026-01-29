import React, { useState, useEffect, useCallback } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Animated,
} from 'react-native';
import { colors } from '../styles/colors';

const QUOTE_API_URL = 'https://chalysh.pro/quote_api/random_quote';

export default function RandomQuote() {
    const [quote, setQuote] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fadeAnim] = useState(new Animated.Value(0));
    const [scaleAnim] = useState(new Animated.Value(0.95));

    const animateIn = useCallback(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 8,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, scaleAnim]);

    const animateOut = useCallback(() => {
        return new Promise((resolve) => {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 0.95,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start(resolve);
        });
    }, [fadeAnim, scaleAnim]);

    const fetchQuote = useCallback(async (shouldAnimate = true) => {
        try {
            if (shouldAnimate && quote) {
                await animateOut();
            }

            setIsLoading(true);
            setError(null);

            const response = await fetch(QUOTE_API_URL);
            const data = await response.json();

            if (data.status === 'OK' && data.data) {
                setQuote(data.data);
            } else {
                setError('Не удалось получить цитату');
            }
        } catch (err) {
            setError('Ошибка подключения');
            console.error('Error fetching quote:', err);
        } finally {
            setIsLoading(false);
            animateIn();
        }
    }, [quote, animateIn, animateOut]);

    useEffect(() => {
        fetchQuote(false);
    }, []);

    const handleRefresh = () => {
        fetchQuote(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.label}>💬 Цитата дня</Text>
                <TouchableOpacity
                    onPress={handleRefresh}
                    style={styles.refreshButton}
                    disabled={isLoading}
                >
                    <Text style={styles.refreshText}>
                        {isLoading ? '...' : '🔄'}
                    </Text>
                </TouchableOpacity>
            </View>

            <Animated.View
                style={[
                    styles.quoteCard,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                {isLoading && !quote ? (
                    <ActivityIndicator color={colors.primary} size="small" />
                ) : error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : (
                    <>
                        <Text style={styles.quoteSymbol}>"</Text>
                        <Text style={styles.quoteText}>{quote}</Text>
                        <Text style={styles.quoteSymbolEnd}>"</Text>
                    </>
                )}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textSecondary,
        letterSpacing: 0.5,
    },
    refreshButton: {
        padding: 6,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    refreshText: {
        fontSize: 16,
    },
    quoteCard: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.cardBorder,
        position: 'relative',
        minHeight: 80,
        justifyContent: 'center',
        // Glassmorphism effect
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    quoteSymbol: {
        position: 'absolute',
        top: 8,
        left: 12,
        fontSize: 32,
        color: colors.primary,
        opacity: 0.6,
        fontWeight: '700',
    },
    quoteSymbolEnd: {
        position: 'absolute',
        bottom: 8,
        right: 12,
        fontSize: 32,
        color: colors.primary,
        opacity: 0.6,
        fontWeight: '700',
    },
    quoteText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.textPrimary,
        fontStyle: 'italic',
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    errorText: {
        fontSize: 14,
        color: colors.textMuted,
        textAlign: 'center',
    },
});
