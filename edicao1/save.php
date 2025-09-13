<?php
// Caminho para o arquivo CSV
$file = __DIR__ . '/data/planilha.csv';

// Recebe os dados enviados pelo frontend
$data = json_decode(file_get_contents('php://input'), true);

// Salva os dados recebidos em um arquivo de log para depuração
file_put_contents('debug.txt', print_r($data, true));

// Define o cabeçalho
$header = ['id', 'title', 'link', 'notes', 'status'];

// Ordena os cards pelo ID antes de salvar
usort($data, function ($a, $b) {
    return $a['id'] <=> $b['id'];
});

// Converte os dados para o formato CSV
$output = fopen($file, 'w');
fputcsv($output, $header); // Escreve o cabeçalho

foreach ($data as $row) {
    fputcsv($output, [
        $row['id'],
        $row['title'],
        $row['link'],
        $row['notes'],
        $row['status']
    ]);
}

fclose($output);

echo json_encode(["message" => "Dados salvos com sucesso"]);
?>