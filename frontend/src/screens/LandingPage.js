import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  useFonts,
  JetBrainsMono_400Regular,
  JetBrainsMono_700Bold,
} from '@expo-google-fonts/jetbrains-mono';

const LandingPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: JetBrainsMono_400Regular,
    JetBrainsMonoBold: JetBrainsMono_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Section */}
      <View style={[styles.section, styles.hero]}>
        <Text style={styles.heroTitle}>Power Your Business Growth</Text>
        <Text style={styles.heroSubtitle}>
          All-in-one CRM solution designed for mobile-first teams
        </Text>
        <View style={styles.ctaContainer}>
          <Text
            style={styles.ctaButton}
            onPress={() => navigation.navigate('Login')}
          >
            Get Started →
          </Text>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Our CRM?</Text>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📊</Text>
          <Text style={styles.featureTitle}>Advanced Analytics</Text>
          <Text style={styles.featureDescription}>
            Track performance metrics and customer insights in real-time.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💬</Text>
          <Text style={styles.featureTitle}>Seamless Communication</Text>
          <Text style={styles.featureDescription}>
            Integrated messaging and email tools for better client engagement.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>⚡</Text>
          <Text style={styles.featureTitle}>Mobile-Optimized</Text>
          <Text style={styles.featureDescription}>
            Access your data anytime, anywhere with our native mobile experience.
          </Text>
        </View>
      </View>

      {/* Testimonial Section */}
      <View style={[styles.section, styles.testimonialSection]}>
        <Text style={styles.sectionTitle}>Trusted by Growing Businesses</Text>
        <View style={styles.testimonialCard}>
          <Text style={styles.testimonialQuote}>
            "This CRM transformed how we manage customer relationships."
          </Text>
          <Text style={styles.testimonialAuthor}>
            — Sarah Johnson, CEO of TechFlow
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 MobileCRM | Powering business growth worldwide
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#29335C', // Dark Blue Background
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40, // ensure footer isn't cut off
  },
  section: {
    padding: 20,
  },
  hero: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    backgroundColor: '#F3A712', // Orange Accent
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#DB2B39',
    fontFamily: 'JetBrainsMonoBold',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#534D41',
    fontFamily: 'JetBrainsMono',
    textAlign: 'center',
    maxWidth: 300,
  },
  ctaContainer: {
    marginTop: 30,
  },
  ctaButton: {
    fontSize: 18,
    color: '#FE0CEA',
    textDecorationLine: 'underline',
    fontFamily: 'JetBrainsMonoBold',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DB2B39',
    fontFamily: 'JetBrainsMonoBold',
    marginBottom: 20,
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#29335C',
    fontFamily: 'JetBrainsMonoBold',
  },
  featureDescription: {
    fontSize: 16,
    color: '#534D41',
    fontFamily: 'JetBrainsMono',
    marginTop: 5,
  },
  testimonialSection: {
    backgroundColor: '#F3A712',
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testimonialQuote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#29335C',
    fontFamily: 'JetBrainsMono',
    marginBottom: 10,
  },
  testimonialAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DB2B39',
    fontFamily: 'JetBrainsMonoBold',
    textAlign: 'right',
  },
  footer: {
    backgroundColor: '#29335C',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#534D41',
  },
  footerText: {
    fontSize: 14,
    color: '#534D41',
    fontFamily: 'JetBrainsMono',
    textAlign: 'center',
  },
});

export default LandingPage;
