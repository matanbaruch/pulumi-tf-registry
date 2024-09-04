// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotfleetwiseCampaign extends pulumi.CustomResource {
    /**
     * Get an existing IotfleetwiseCampaign resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotfleetwiseCampaignState, opts?: pulumi.CustomResourceOptions): IotfleetwiseCampaign {
        return new IotfleetwiseCampaign(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/iotfleetwiseCampaign:IotfleetwiseCampaign';

    /**
     * Returns true if the given object is an instance of IotfleetwiseCampaign.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotfleetwiseCampaign {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotfleetwiseCampaign.__pulumiType;
    }

    public readonly action!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly collectionScheme!: pulumi.Output<outputs.IotfleetwiseCampaignCollectionScheme>;
    public readonly compression!: pulumi.Output<string>;
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    public readonly dataDestinationConfigs!: pulumi.Output<outputs.IotfleetwiseCampaignDataDestinationConfig[]>;
    public readonly dataExtraDimensions!: pulumi.Output<string[]>;
    public readonly description!: pulumi.Output<string>;
    public readonly diagnosticsMode!: pulumi.Output<string>;
    public readonly expiryTime!: pulumi.Output<string>;
    public /*out*/ readonly lastModificationTime!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly postTriggerCollectionDuration!: pulumi.Output<number>;
    public readonly priority!: pulumi.Output<number>;
    public readonly signalCatalogArn!: pulumi.Output<string>;
    public readonly signalsToCollects!: pulumi.Output<outputs.IotfleetwiseCampaignSignalsToCollect[]>;
    public readonly spoolingMode!: pulumi.Output<string>;
    public readonly startTime!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.IotfleetwiseCampaignTag[]>;
    public readonly targetArn!: pulumi.Output<string>;

    /**
     * Create a IotfleetwiseCampaign resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotfleetwiseCampaignArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotfleetwiseCampaignArgs | IotfleetwiseCampaignState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotfleetwiseCampaignState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["collectionScheme"] = state ? state.collectionScheme : undefined;
            resourceInputs["compression"] = state ? state.compression : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["dataDestinationConfigs"] = state ? state.dataDestinationConfigs : undefined;
            resourceInputs["dataExtraDimensions"] = state ? state.dataExtraDimensions : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["diagnosticsMode"] = state ? state.diagnosticsMode : undefined;
            resourceInputs["expiryTime"] = state ? state.expiryTime : undefined;
            resourceInputs["lastModificationTime"] = state ? state.lastModificationTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["postTriggerCollectionDuration"] = state ? state.postTriggerCollectionDuration : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["signalCatalogArn"] = state ? state.signalCatalogArn : undefined;
            resourceInputs["signalsToCollects"] = state ? state.signalsToCollects : undefined;
            resourceInputs["spoolingMode"] = state ? state.spoolingMode : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetArn"] = state ? state.targetArn : undefined;
        } else {
            const args = argsOrState as IotfleetwiseCampaignArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.collectionScheme === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collectionScheme'");
            }
            if ((!args || args.signalCatalogArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signalCatalogArn'");
            }
            if ((!args || args.targetArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetArn'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["collectionScheme"] = args ? args.collectionScheme : undefined;
            resourceInputs["compression"] = args ? args.compression : undefined;
            resourceInputs["dataDestinationConfigs"] = args ? args.dataDestinationConfigs : undefined;
            resourceInputs["dataExtraDimensions"] = args ? args.dataExtraDimensions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["diagnosticsMode"] = args ? args.diagnosticsMode : undefined;
            resourceInputs["expiryTime"] = args ? args.expiryTime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["postTriggerCollectionDuration"] = args ? args.postTriggerCollectionDuration : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["signalCatalogArn"] = args ? args.signalCatalogArn : undefined;
            resourceInputs["signalsToCollects"] = args ? args.signalsToCollects : undefined;
            resourceInputs["spoolingMode"] = args ? args.spoolingMode : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetArn"] = args ? args.targetArn : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModificationTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotfleetwiseCampaign.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotfleetwiseCampaign resources.
 */
export interface IotfleetwiseCampaignState {
    action?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    collectionScheme?: pulumi.Input<inputs.IotfleetwiseCampaignCollectionScheme>;
    compression?: pulumi.Input<string>;
    creationTime?: pulumi.Input<string>;
    dataDestinationConfigs?: pulumi.Input<pulumi.Input<inputs.IotfleetwiseCampaignDataDestinationConfig>[]>;
    dataExtraDimensions?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    diagnosticsMode?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    lastModificationTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    postTriggerCollectionDuration?: pulumi.Input<number>;
    priority?: pulumi.Input<number>;
    signalCatalogArn?: pulumi.Input<string>;
    signalsToCollects?: pulumi.Input<pulumi.Input<inputs.IotfleetwiseCampaignSignalsToCollect>[]>;
    spoolingMode?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IotfleetwiseCampaignTag>[]>;
    targetArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IotfleetwiseCampaign resource.
 */
export interface IotfleetwiseCampaignArgs {
    action: pulumi.Input<string>;
    collectionScheme: pulumi.Input<inputs.IotfleetwiseCampaignCollectionScheme>;
    compression?: pulumi.Input<string>;
    dataDestinationConfigs?: pulumi.Input<pulumi.Input<inputs.IotfleetwiseCampaignDataDestinationConfig>[]>;
    dataExtraDimensions?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    diagnosticsMode?: pulumi.Input<string>;
    expiryTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    postTriggerCollectionDuration?: pulumi.Input<number>;
    priority?: pulumi.Input<number>;
    signalCatalogArn: pulumi.Input<string>;
    signalsToCollects?: pulumi.Input<pulumi.Input<inputs.IotfleetwiseCampaignSignalsToCollect>[]>;
    spoolingMode?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IotfleetwiseCampaignTag>[]>;
    targetArn: pulumi.Input<string>;
}
