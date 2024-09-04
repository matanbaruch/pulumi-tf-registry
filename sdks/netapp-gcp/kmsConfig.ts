// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class KmsConfig extends pulumi.CustomResource {
    /**
     * Get an existing KmsConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KmsConfigState, opts?: pulumi.CustomResourceOptions): KmsConfig {
        return new KmsConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netapp-gcp:index/kmsConfig:KmsConfig';

    /**
     * Returns true if the given object is an instance of KmsConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KmsConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KmsConfig.__pulumiType;
    }

    public readonly keyName!: pulumi.Output<string>;
    public readonly keyProjectId!: pulumi.Output<string | undefined>;
    public readonly keyRingLocation!: pulumi.Output<string>;
    public readonly keyRingName!: pulumi.Output<string>;
    public readonly network!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;

    /**
     * Create a KmsConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KmsConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KmsConfigArgs | KmsConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KmsConfigState | undefined;
            resourceInputs["keyName"] = state ? state.keyName : undefined;
            resourceInputs["keyProjectId"] = state ? state.keyProjectId : undefined;
            resourceInputs["keyRingLocation"] = state ? state.keyRingLocation : undefined;
            resourceInputs["keyRingName"] = state ? state.keyRingName : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as KmsConfigArgs | undefined;
            if ((!args || args.keyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyName'");
            }
            if ((!args || args.keyRingLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyRingLocation'");
            }
            if ((!args || args.keyRingName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyRingName'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["keyProjectId"] = args ? args.keyProjectId : undefined;
            resourceInputs["keyRingLocation"] = args ? args.keyRingLocation : undefined;
            resourceInputs["keyRingName"] = args ? args.keyRingName : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KmsConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KmsConfig resources.
 */
export interface KmsConfigState {
    keyName?: pulumi.Input<string>;
    keyProjectId?: pulumi.Input<string>;
    keyRingLocation?: pulumi.Input<string>;
    keyRingName?: pulumi.Input<string>;
    network?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KmsConfig resource.
 */
export interface KmsConfigArgs {
    keyName: pulumi.Input<string>;
    keyProjectId?: pulumi.Input<string>;
    keyRingLocation: pulumi.Input<string>;
    keyRingName: pulumi.Input<string>;
    network: pulumi.Input<string>;
    region: pulumi.Input<string>;
}
