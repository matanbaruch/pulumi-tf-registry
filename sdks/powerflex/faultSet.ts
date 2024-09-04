// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FaultSet extends pulumi.CustomResource {
    /**
     * Get an existing FaultSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FaultSetState, opts?: pulumi.CustomResourceOptions): FaultSet {
        return new FaultSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerflex:index/faultSet:FaultSet';

    /**
     * Returns true if the given object is an instance of FaultSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FaultSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FaultSet.__pulumiType;
    }

    /**
     * Name of the Fault set
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * ID of the Protection Domain under which the fault set will be created. Cannot be updated.
     */
    public readonly protectionDomainId!: pulumi.Output<string>;

    /**
     * Create a FaultSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FaultSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FaultSetArgs | FaultSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FaultSetState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protectionDomainId"] = state ? state.protectionDomainId : undefined;
        } else {
            const args = argsOrState as FaultSetArgs | undefined;
            if ((!args || args.protectionDomainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protectionDomainId'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protectionDomainId"] = args ? args.protectionDomainId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FaultSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FaultSet resources.
 */
export interface FaultSetState {
    /**
     * Name of the Fault set
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the Protection Domain under which the fault set will be created. Cannot be updated.
     */
    protectionDomainId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FaultSet resource.
 */
export interface FaultSetArgs {
    /**
     * Name of the Fault set
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the Protection Domain under which the fault set will be created. Cannot be updated.
     */
    protectionDomainId: pulumi.Input<string>;
}
