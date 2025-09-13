<?php
// Caminho para o arquivo CSV
$file = __DIR__ . '/data/planilha.csv';

// Verifica se o arquivo existe
if (file_exists($file)) {
    $rows = array_map('str_getcsv', file($file));
    $header = array_shift($rows); // Remove o cabeçalho
    $data = array_map(function ($row) use ($header) {
        return array_combine($header, $row);
    }, $rows);

    // Ordena os cards pelo ID antes de retornar
    usort($data, function ($a, $b) {
        return $a['id'] <=> $b['id'];
    });

    echo json_encode($data);
} else {
    echo json_encode([]); // Retorna um array vazio se o arquivo não existir
}
?>