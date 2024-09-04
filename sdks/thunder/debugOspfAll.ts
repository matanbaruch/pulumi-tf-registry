// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DebugOspfAll extends pulumi.CustomResource {
    /**
     * Get an existing DebugOspfAll resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DebugOspfAllState, opts?: pulumi.CustomResourceOptions): DebugOspfAll {
        return new DebugOspfAll(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/debugOspfAll:DebugOspfAll';

    /**
     * Returns true if the given object is an instance of DebugOspfAll.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DebugOspfAll {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DebugOspfAll.__pulumiType;
    }

    /**
     * Dummy
     */
    public readonly dumy!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DebugOspfAll resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DebugOspfAllArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DebugOspfAllArgs | DebugOspfAllState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DebugOspfAllState | undefined;
            resourceInputs["dumy"] = state ? state.dumy : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DebugOspfAllArgs | undefined;
            resourceInputs["dumy"] = args ? args.dumy : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DebugOspfAll.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DebugOspfAll resources.
 */
export interface DebugOspfAllState {
    /**
     * Dummy
     */
    dumy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DebugOspfAll resource.
 */
export interface DebugOspfAllArgs {
    /**
     * Dummy
     */
    dumy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
