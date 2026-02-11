import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AddTodo from "./src/components/AddTodo";
import TodoItem from "./src/components/TodoItem";
import useTodos from "./src/hooks/useTodos";

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo (useReducer)</Text>
      <AddTodo onAdd={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet</Text>
        }
      />
      <Text style={styles.tip}>
        Tap to toggle. Long press to remove.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 20, fontWeight: "bold", padding: 10 },
  empty: { padding: 10 },
  tip: { padding: 10, opacity: 0.6, fontSize: 12 },
});
