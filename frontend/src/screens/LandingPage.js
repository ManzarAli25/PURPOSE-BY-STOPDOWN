import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  StatusBar,
  Animated
} from 'react-native';
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

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (fontsLoaded) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return <View style={styles.loadingContainer} />;

  const FeatureCard = ({ icon, title, description }) => (
    <Animated.View 
      style={[styles.featureCard, { opacity: fadeAnim }]}
    >
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#29335C" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.heroBackground} />
          <Animated.View 
            style={[styles.heroContent, { opacity: fadeAnim }]}
          >
            <Text style={styles.heroTitle}>Power Your Business Growth</Text>
            <Text style={styles.heroSubtitle}>
              All-in-one CRM solution designed for mobile-first teams
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.ctaButtonText}>Get Started</Text>
              <Text style={styles.ctaArrow}>→</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Our CRM?</Text>
          
          <FeatureCard
            icon="📊"
            title="Advanced Analytics"
            description="Track performance metrics and customer insights in real-time with powerful dashboards."
          />
          
          <FeatureCard
            icon="💬"
            title="Seamless Communication"
            description="Integrated messaging and email tools for better client engagement and follow-ups."
          />
          
          <FeatureCard
            icon="⚡"
            title="Mobile-Optimized"
            description="Access your data anytime, anywhere with our native mobile experience designed for productivity."
          />

          <FeatureCard
            icon="🔒"
            title="Enterprise Security"
            description="Bank-level security to keep your customer data safe and compliant with industry standards."
          />
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>98%</Text>
            <Text style={styles.statLabel}>Customer Satisfaction</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Support Available</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10K+</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
        </View>

        {/* Testimonial Section */}
        <View style={styles.testimonialSection}>
          <View style={styles.testimonialBackground} />
          <View style={styles.testimonialContent}>
            <Text style={styles.sectionTitle}>Trusted by Growing Businesses</Text>
            <View style={styles.testimonialCard}>
              <Text style={styles.testimonialQuote}>
                "This CRM transformed how we manage customer relationships. Our team productivity increased by 40% in just two months!"
              </Text>
              <View style={styles.testimonialAuthor}>
                <View style={styles.authorAvatar} />
                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>Sarah Johnson</Text>
                  <Text style={styles.authorCompany}>CEO of TechFlow</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Final CTA */}
        <View style={styles.finalCta}>
          <Text style={styles.finalCtaTitle}>Ready to Transform Your Business?</Text>
          <Text style={styles.finalCtaSubtitle}>Start your 14-day free trial today</Text>
          <TouchableOpacity
            style={[styles.ctaButton, styles.secondaryCta]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.ctaButtonText}>Start Free Trial</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>MobileCRM</Text>
          <Text style={styles.footerText}>
            © 2024 MobileCRM | Powering business growth worldwide
          </Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Privacy</Text>
            <Text style={styles.footerLink}>Terms</Text>
            <Text style={styles.footerLink}>Contact</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#29335C',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  // Hero Section
  hero: {
    height: 400,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#29335C',
  },
  heroContent: {
    padding: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMonoBold',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 42,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#F3A712',
    fontFamily: 'JetBrainsMono',
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 24,
    marginBottom: 32,
  },
  // CTA Button
  ctaButton: {
    backgroundColor: '#DB2B39',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#DB2B39',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMonoBold',
    marginRight: 8,
  },
  ctaArrow: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMonoBold',
  },
  // Sections
  section: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#29335C',
    fontFamily: 'JetBrainsMonoBold',
    marginBottom: 24,
    textAlign: 'center',
  },
  // Feature Cards
  featureCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#DB2B39',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#29335C',
    fontFamily: 'JetBrainsMonoBold',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#534D41',
    fontFamily: 'JetBrainsMono',
    lineHeight: 20,
  },
  // Stats Section
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#29335C',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F3A712',
    fontFamily: 'JetBrainsMonoBold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMono',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#DB2B39',
    opacity: 0.5,
  },
  // Testimonial Section
  testimonialSection: {
    minHeight: 300,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  testimonialBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#DB2B39',
  },
  testimonialContent: {
    padding: 24,
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  testimonialQuote: {
    fontSize: 16,
    color: '#29335C',
    fontFamily: 'JetBrainsMono',
    lineHeight: 22,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3A712',
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DB2B39',
    fontFamily: 'JetBrainsMonoBold',
  },
  authorCompany: {
    fontSize: 14,
    color: '#534D41',
    fontFamily: 'JetBrainsMono',
  },
  // Final CTA
  finalCta: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  finalCtaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#29335C',
    fontFamily: 'JetBrainsMonoBold',
    textAlign: 'center',
    marginBottom: 8,
  },
  finalCtaSubtitle: {
    fontSize: 16,
    color: '#534D41',
    fontFamily: 'JetBrainsMono',
    textAlign: 'center',
    marginBottom: 24,
  },
  secondaryCta: {
    backgroundColor: '#29335C',
  },
  // Footer
  footer: {
    backgroundColor: '#1a1f3d',
    padding: 24,
    alignItems: 'center',
  },
  footerLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F3A712',
    fontFamily: 'JetBrainsMonoBold',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'JetBrainsMono',
    textAlign: 'center',
    marginBottom: 16,
    opacity: 0.8,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLink: {
    fontSize: 12,
    color: '#F3A712',
    fontFamily: 'JetBrainsMono',
    marginHorizontal: 12,
    textDecorationLine: 'underline',
  },
});

export default LandingPage;