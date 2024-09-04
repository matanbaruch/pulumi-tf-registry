// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemautoupdateOverride extends pulumi.CustomResource {
    /**
     * Get an existing SystemautoupdateOverride resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemautoupdateOverrideState, opts?: pulumi.CustomResourceOptions): SystemautoupdateOverride {
        return new SystemautoupdateOverride(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/systemautoupdateOverride:SystemautoupdateOverride';

    /**
     * Returns true if the given object is an instance of SystemautoupdateOverride.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemautoupdateOverride {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemautoupdateOverride.__pulumiType;
    }

    public readonly address!: pulumi.Output<string>;
    public readonly failOver!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemautoupdateOverride resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemautoupdateOverrideArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemautoupdateOverrideArgs | SystemautoupdateOverrideState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemautoupdateOverrideState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["failOver"] = state ? state.failOver : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemautoupdateOverrideArgs | undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["failOver"] = args ? args.failOver : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemautoupdateOverride.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemautoupdateOverride resources.
 */
export interface SystemautoupdateOverrideState {
    address?: pulumi.Input<string>;
    failOver?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemautoupdateOverride resource.
 */
export interface SystemautoupdateOverrideArgs {
    address?: pulumi.Input<string>;
    failOver?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
