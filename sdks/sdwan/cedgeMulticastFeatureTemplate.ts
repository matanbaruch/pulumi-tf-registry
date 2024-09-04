// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CedgeMulticastFeatureTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CedgeMulticastFeatureTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CedgeMulticastFeatureTemplateState, opts?: pulumi.CustomResourceOptions): CedgeMulticastFeatureTemplate {
        return new CedgeMulticastFeatureTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/cedgeMulticastFeatureTemplate:CedgeMulticastFeatureTemplate';

    /**
     * Returns true if the given object is an instance of CedgeMulticastFeatureTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CedgeMulticastFeatureTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CedgeMulticastFeatureTemplate.__pulumiType;
    }

    /**
     * The description of the feature template
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    public readonly deviceTypes!: pulumi.Output<string[]>;
    /**
     * Replicator is local to this device - Default value: `false`
     */
    public readonly localReplicator!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly localReplicatorVariable!: pulumi.Output<string | undefined>;
    /**
     * The name of the feature template
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Shortest Path Tree (SPT) Only Mode - Default value: `false`
     */
    public readonly sptOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly sptOnlyVariable!: pulumi.Output<string | undefined>;
    /**
     * The template type
     */
    public /*out*/ readonly templateType!: pulumi.Output<string>;
    /**
     * Set number of joins per group the router supports - Range: `0`-`1000`
     */
    public readonly threshold!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly thresholdVariable!: pulumi.Output<string | undefined>;
    /**
     * The version of the feature template
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a CedgeMulticastFeatureTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CedgeMulticastFeatureTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CedgeMulticastFeatureTemplateArgs | CedgeMulticastFeatureTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CedgeMulticastFeatureTemplateState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceTypes"] = state ? state.deviceTypes : undefined;
            resourceInputs["localReplicator"] = state ? state.localReplicator : undefined;
            resourceInputs["localReplicatorVariable"] = state ? state.localReplicatorVariable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sptOnly"] = state ? state.sptOnly : undefined;
            resourceInputs["sptOnlyVariable"] = state ? state.sptOnlyVariable : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
            resourceInputs["threshold"] = state ? state.threshold : undefined;
            resourceInputs["thresholdVariable"] = state ? state.thresholdVariable : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as CedgeMulticastFeatureTemplateArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.deviceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceTypes'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceTypes"] = args ? args.deviceTypes : undefined;
            resourceInputs["localReplicator"] = args ? args.localReplicator : undefined;
            resourceInputs["localReplicatorVariable"] = args ? args.localReplicatorVariable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sptOnly"] = args ? args.sptOnly : undefined;
            resourceInputs["sptOnlyVariable"] = args ? args.sptOnlyVariable : undefined;
            resourceInputs["threshold"] = args ? args.threshold : undefined;
            resourceInputs["thresholdVariable"] = args ? args.thresholdVariable : undefined;
            resourceInputs["templateType"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CedgeMulticastFeatureTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CedgeMulticastFeatureTemplate resources.
 */
export interface CedgeMulticastFeatureTemplateState {
    /**
     * The description of the feature template
     */
    description?: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Replicator is local to this device - Default value: `false`
     */
    localReplicator?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    localReplicatorVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Shortest Path Tree (SPT) Only Mode - Default value: `false`
     */
    sptOnly?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    sptOnlyVariable?: pulumi.Input<string>;
    /**
     * The template type
     */
    templateType?: pulumi.Input<string>;
    /**
     * Set number of joins per group the router supports - Range: `0`-`1000`
     */
    threshold?: pulumi.Input<number>;
    /**
     * Variable name
     */
    thresholdVariable?: pulumi.Input<string>;
    /**
     * The version of the feature template
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CedgeMulticastFeatureTemplate resource.
 */
export interface CedgeMulticastFeatureTemplateArgs {
    /**
     * The description of the feature template
     */
    description: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Replicator is local to this device - Default value: `false`
     */
    localReplicator?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    localReplicatorVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Shortest Path Tree (SPT) Only Mode - Default value: `false`
     */
    sptOnly?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    sptOnlyVariable?: pulumi.Input<string>;
    /**
     * Set number of joins per group the router supports - Range: `0`-`1000`
     */
    threshold?: pulumi.Input<number>;
    /**
     * Variable name
     */
    thresholdVariable?: pulumi.Input<string>;
}
