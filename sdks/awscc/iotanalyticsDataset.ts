// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotanalyticsDataset extends pulumi.CustomResource {
    /**
     * Get an existing IotanalyticsDataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotanalyticsDatasetState, opts?: pulumi.CustomResourceOptions): IotanalyticsDataset {
        return new IotanalyticsDataset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iotanalyticsDataset:IotanalyticsDataset';

    /**
     * Returns true if the given object is an instance of IotanalyticsDataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotanalyticsDataset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotanalyticsDataset.__pulumiType;
    }

    public readonly actions!: pulumi.Output<outputs.IotanalyticsDatasetAction[]>;
    public readonly contentDeliveryRules!: pulumi.Output<outputs.IotanalyticsDatasetContentDeliveryRule[]>;
    public /*out*/ readonly datasetId!: pulumi.Output<string>;
    public readonly datasetName!: pulumi.Output<string>;
    public readonly lateDataRules!: pulumi.Output<outputs.IotanalyticsDatasetLateDataRule[]>;
    public readonly retentionPeriod!: pulumi.Output<outputs.IotanalyticsDatasetRetentionPeriod>;
    public readonly tags!: pulumi.Output<outputs.IotanalyticsDatasetTag[]>;
    public readonly triggers!: pulumi.Output<outputs.IotanalyticsDatasetTrigger[]>;
    public readonly versioningConfiguration!: pulumi.Output<outputs.IotanalyticsDatasetVersioningConfiguration>;

    /**
     * Create a IotanalyticsDataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotanalyticsDatasetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotanalyticsDatasetArgs | IotanalyticsDatasetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotanalyticsDatasetState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["contentDeliveryRules"] = state ? state.contentDeliveryRules : undefined;
            resourceInputs["datasetId"] = state ? state.datasetId : undefined;
            resourceInputs["datasetName"] = state ? state.datasetName : undefined;
            resourceInputs["lateDataRules"] = state ? state.lateDataRules : undefined;
            resourceInputs["retentionPeriod"] = state ? state.retentionPeriod : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["triggers"] = state ? state.triggers : undefined;
            resourceInputs["versioningConfiguration"] = state ? state.versioningConfiguration : undefined;
        } else {
            const args = argsOrState as IotanalyticsDatasetArgs | undefined;
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["contentDeliveryRules"] = args ? args.contentDeliveryRules : undefined;
            resourceInputs["datasetName"] = args ? args.datasetName : undefined;
            resourceInputs["lateDataRules"] = args ? args.lateDataRules : undefined;
            resourceInputs["retentionPeriod"] = args ? args.retentionPeriod : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["triggers"] = args ? args.triggers : undefined;
            resourceInputs["versioningConfiguration"] = args ? args.versioningConfiguration : undefined;
            resourceInputs["datasetId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotanalyticsDataset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotanalyticsDataset resources.
 */
export interface IotanalyticsDatasetState {
    actions?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetAction>[]>;
    contentDeliveryRules?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetContentDeliveryRule>[]>;
    datasetId?: pulumi.Input<string>;
    datasetName?: pulumi.Input<string>;
    lateDataRules?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetLateDataRule>[]>;
    retentionPeriod?: pulumi.Input<inputs.IotanalyticsDatasetRetentionPeriod>;
    tags?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetTag>[]>;
    triggers?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetTrigger>[]>;
    versioningConfiguration?: pulumi.Input<inputs.IotanalyticsDatasetVersioningConfiguration>;
}

/**
 * The set of arguments for constructing a IotanalyticsDataset resource.
 */
export interface IotanalyticsDatasetArgs {
    actions: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetAction>[]>;
    contentDeliveryRules?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetContentDeliveryRule>[]>;
    datasetName?: pulumi.Input<string>;
    lateDataRules?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetLateDataRule>[]>;
    retentionPeriod?: pulumi.Input<inputs.IotanalyticsDatasetRetentionPeriod>;
    tags?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetTag>[]>;
    triggers?: pulumi.Input<pulumi.Input<inputs.IotanalyticsDatasetTrigger>[]>;
    versioningConfiguration?: pulumi.Input<inputs.IotanalyticsDatasetVersioningConfiguration>;
}
