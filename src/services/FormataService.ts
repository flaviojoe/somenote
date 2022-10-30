export const FormataService = {
    valMonet(valor: number): string {
        return valor.toLocaleString(
            'pt-BR',
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        );
    },
    limiteText(texto: string, limite: number): string {
        if (texto.length < limite) {
            return texto;
        }

        return texto.slice(0, limite) + '...';
    }
}