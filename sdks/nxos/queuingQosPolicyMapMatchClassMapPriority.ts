// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class QueuingQosPolicyMapMatchClassMapPriority extends pulumi.CustomResource {
    /**
     * Get an existing QueuingQosPolicyMapMatchClassMapPriority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueuingQosPolicyMapMatchClassMapPriorityState, opts?: pulumi.CustomResourceOptions): QueuingQosPolicyMapMatchClassMapPriority {
        return new QueuingQosPolicyMapMatchClassMapPriority(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/queuingQosPolicyMapMatchClassMapPriority:QueuingQosPolicyMapMatchClassMapPriority';

    /**
     * Returns true if the given object is an instance of QueuingQosPolicyMapMatchClassMapPriority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QueuingQosPolicyMapMatchClassMapPriority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QueuingQosPolicyMapMatchClassMapPriority.__pulumiType;
    }

    /**
     * Class map name.
     */
    public readonly classMapName!: pulumi.Output<string>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Priority level. - Range: `1`-`8`
     */
    public readonly level!: pulumi.Output<number>;
    /**
     * Policy map name.
     */
    public readonly policyMapName!: pulumi.Output<string>;

    /**
     * Create a QueuingQosPolicyMapMatchClassMapPriority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueuingQosPolicyMapMatchClassMapPriorityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QueuingQosPolicyMapMatchClassMapPriorityArgs | QueuingQosPolicyMapMatchClassMapPriorityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QueuingQosPolicyMapMatchClassMapPriorityState | undefined;
            resourceInputs["classMapName"] = state ? state.classMapName : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["level"] = state ? state.level : undefined;
            resourceInputs["policyMapName"] = state ? state.policyMapName : undefined;
        } else {
            const args = argsOrState as QueuingQosPolicyMapMatchClassMapPriorityArgs | undefined;
            if ((!args || args.classMapName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'classMapName'");
            }
            if ((!args || args.level === undefined) && !opts.urn) {
                throw new Error("Missing required property 'level'");
            }
            if ((!args || args.policyMapName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyMapName'");
            }
            resourceInputs["classMapName"] = args ? args.classMapName : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["policyMapName"] = args ? args.policyMapName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QueuingQosPolicyMapMatchClassMapPriority.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering QueuingQosPolicyMapMatchClassMapPriority resources.
 */
export interface QueuingQosPolicyMapMatchClassMapPriorityState {
    /**
     * Class map name.
     */
    classMapName?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Priority level. - Range: `1`-`8`
     */
    level?: pulumi.Input<number>;
    /**
     * Policy map name.
     */
    policyMapName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QueuingQosPolicyMapMatchClassMapPriority resource.
 */
export interface QueuingQosPolicyMapMatchClassMapPriorityArgs {
    /**
     * Class map name.
     */
    classMapName: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Priority level. - Range: `1`-`8`
     */
    level: pulumi.Input<number>;
    /**
     * Policy map name.
     */
    policyMapName: pulumi.Input<string>;
}
