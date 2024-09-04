// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DebugOspfIfsm extends pulumi.CustomResource {
    /**
     * Get an existing DebugOspfIfsm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DebugOspfIfsmState, opts?: pulumi.CustomResourceOptions): DebugOspfIfsm {
        return new DebugOspfIfsm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/debugOspfIfsm:DebugOspfIfsm';

    /**
     * Returns true if the given object is an instance of DebugOspfIfsm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DebugOspfIfsm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DebugOspfIfsm.__pulumiType;
    }

    /**
     * IFSM Event Information
     */
    public readonly events!: pulumi.Output<number | undefined>;
    /**
     * IFSM Status Information
     */
    public readonly status!: pulumi.Output<number | undefined>;
    /**
     * IFSM Timer Information
     */
    public readonly timers!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DebugOspfIfsm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DebugOspfIfsmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DebugOspfIfsmArgs | DebugOspfIfsmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DebugOspfIfsmState | undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timers"] = state ? state.timers : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DebugOspfIfsmArgs | undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timers"] = args ? args.timers : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DebugOspfIfsm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DebugOspfIfsm resources.
 */
export interface DebugOspfIfsmState {
    /**
     * IFSM Event Information
     */
    events?: pulumi.Input<number>;
    /**
     * IFSM Status Information
     */
    status?: pulumi.Input<number>;
    /**
     * IFSM Timer Information
     */
    timers?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DebugOspfIfsm resource.
 */
export interface DebugOspfIfsmArgs {
    /**
     * IFSM Event Information
     */
    events?: pulumi.Input<number>;
    /**
     * IFSM Status Information
     */
    status?: pulumi.Input<number>;
    /**
     * IFSM Timer Information
     */
    timers?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
