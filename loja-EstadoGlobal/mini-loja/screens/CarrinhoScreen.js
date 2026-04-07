
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCarrinho,carrinho } from '../context/CarrinhoContext';
import { produtos } from '../data/produtos';

export default function CarrinhoScreen() {
    const { adicionar, carrinho } = useCarrinho();
  return (


    <View style={styles.container}>
        <Text style={styles.titulo}>Carrinho</Text>
        data={produtos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                    <Text style={styles.nome}>{item.nome}</Text>
                    <Text>{carrinho.item}</Text>
                    
                </View>)}
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, alignSelf: 'center' },
  card: { backgroundColor: '#555', padding: 15, marginVertical: 8, borderRadius: 10 },
  nome: { fontSize: 16, fontWeight: '600' },
});