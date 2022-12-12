export function debug(classe: unknown) {

    console.log("Classe criada!", classe);

}

// na maioria das vezes, recomenda-se usar any ao invés de unknown
export function log(constructor: any) {

    return class extends constructor {
        created_at: Date = new Date("2021-02-15")
    }

}
