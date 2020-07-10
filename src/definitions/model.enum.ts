export enum ModelType {
    LinearModel = "LinearModel",
    MLPModel  = "MLPModel",
    CNNModel = "CNNModel",
    DenseResidualNN = "DenseResidualNN"
}

export class ModelTypeUtil {

    public static translationType(modelType: ModelType): string {
        switch (modelType) {
            case ModelType.LinearModel :
                return 'Modèle Linéaire';
            case ModelType.MLPModel :
                return 'Percéptron multicouche';
            case ModelType.CNNModel :
                return 'Convolutional Neural Network';
            case ModelType.DenseResidualNN :
                return 'Dense Résidual Neural Network';
            default:
                return '';

        }
    }
}
