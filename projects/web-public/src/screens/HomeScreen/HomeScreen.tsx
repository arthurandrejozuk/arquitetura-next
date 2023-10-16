import { Text } from "@alura/design-system/components/Text";
import { sum } from "@alura/utils/math/sum";
import React from "react";

export function HomeScreen() {
    return (
        <div>
            <Text tag={"h1"}>Olá mundo</Text>
            <Text tag="p">Importando modulo local: {sum(2, 2)}</Text>
        </div>
    );
}
