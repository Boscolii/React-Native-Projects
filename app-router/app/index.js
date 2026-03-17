import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Henrique Boscoli</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
      </TouchableOpacity>


    </View>

  );
  
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo:    { fontSize: 40, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
  fotoSimulada: {backgroundColor: '#E93333', padding: 50, borderRadius: 999},
  inicialNome: {color: '#000', fontSize: 50},

});