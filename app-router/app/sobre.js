import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ℹ️ Sobre</Text>
      <Text style={styles.descricao}>CC - 2026</Text>
       <Text style={styles.descricao}>CC - 2026</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  descricao:  { fontSize: 20, color: '#555', marginBottom: 24 },
  voltar:     { fontSize: 16, color: '#E83D84', fontWeight: '600' },
});