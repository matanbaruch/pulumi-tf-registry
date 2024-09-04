// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DefaultQosPolicyMapMatchClassMap extends pulumi.CustomResource {
    /**
     * Get an existing DefaultQosPolicyMapMatchClassMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultQosPolicyMapMatchClassMapState, opts?: pulumi.CustomResourceOptions): DefaultQosPolicyMapMatchClassMap {
        return new DefaultQosPolicyMapMatchClassMap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/defaultQosPolicyMapMatchClassMap:DefaultQosPolicyMapMatchClassMap';

    /**
     * Returns true if the given object is an instance of DefaultQosPolicyMapMatchClassMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultQosPolicyMapMatchClassMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultQosPolicyMapMatchClassMap.__pulumiType;
    }

    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Class map name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Policy map name.
     */
    public readonly policyMapName!: pulumi.Output<string>;

    /**
     * Create a DefaultQosPolicyMapMatchClassMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultQosPolicyMapMatchClassMapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultQosPolicyMapMatchClassMapArgs | DefaultQosPolicyMapMatchClassMapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultQosPolicyMapMatchClassMapState | undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyMapName"] = state ? state.policyMapName : undefined;
        } else {
            const args = argsOrState as DefaultQosPolicyMapMatchClassMapArgs | undefined;
            if ((!args || args.policyMapName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyMapName'");
            }
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policyMapName"] = args ? args.policyMapName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultQosPolicyMapMatchClassMap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultQosPolicyMapMatchClassMap resources.
 */
export interface DefaultQosPolicyMapMatchClassMapState {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Class map name.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy map name.
     */
    policyMapName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultQosPolicyMapMatchClassMap resource.
 */
export interface DefaultQosPolicyMapMatchClassMapArgs {
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Class map name.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy map name.
     */
    policyMapName: pulumi.Input<string>;
}
