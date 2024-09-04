// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FwSessionAgingTcp extends pulumi.CustomResource {
    /**
     * Get an existing FwSessionAgingTcp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FwSessionAgingTcpState, opts?: pulumi.CustomResourceOptions): FwSessionAgingTcp {
        return new FwSessionAgingTcp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/fwSessionAgingTcp:FwSessionAgingTcp';

    /**
     * Returns true if the given object is an instance of FwSessionAgingTcp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FwSessionAgingTcp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FwSessionAgingTcp.__pulumiType;
    }

    /**
     * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
     */
    public readonly forceDeleteTimeout!: pulumi.Output<number | undefined>;
    /**
     * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
     */
    public readonly forceDeleteTimeout100ms!: pulumi.Output<number | undefined>;
    /**
     * TCP Half Close Idle Timeout (sec), default is off (number)
     */
    public readonly halfCloseIdleTimeout!: pulumi.Output<number | undefined>;
    /**
     * TCP Half Open Idle Timeout (sec), default is off (number)
     */
    public readonly halfOpenIdleTimeout!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    public readonly portCfgs!: pulumi.Output<outputs.FwSessionAgingTcpPortCfg[] | undefined>;
    /**
     * Idle Timeout (sec), default is 600 (number)
     */
    public readonly tcpIdleTimeout!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a FwSessionAgingTcp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FwSessionAgingTcpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FwSessionAgingTcpArgs | FwSessionAgingTcpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FwSessionAgingTcpState | undefined;
            resourceInputs["forceDeleteTimeout"] = state ? state.forceDeleteTimeout : undefined;
            resourceInputs["forceDeleteTimeout100ms"] = state ? state.forceDeleteTimeout100ms : undefined;
            resourceInputs["halfCloseIdleTimeout"] = state ? state.halfCloseIdleTimeout : undefined;
            resourceInputs["halfOpenIdleTimeout"] = state ? state.halfOpenIdleTimeout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["portCfgs"] = state ? state.portCfgs : undefined;
            resourceInputs["tcpIdleTimeout"] = state ? state.tcpIdleTimeout : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as FwSessionAgingTcpArgs | undefined;
            resourceInputs["forceDeleteTimeout"] = args ? args.forceDeleteTimeout : undefined;
            resourceInputs["forceDeleteTimeout100ms"] = args ? args.forceDeleteTimeout100ms : undefined;
            resourceInputs["halfCloseIdleTimeout"] = args ? args.halfCloseIdleTimeout : undefined;
            resourceInputs["halfOpenIdleTimeout"] = args ? args.halfOpenIdleTimeout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["portCfgs"] = args ? args.portCfgs : undefined;
            resourceInputs["tcpIdleTimeout"] = args ? args.tcpIdleTimeout : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FwSessionAgingTcp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FwSessionAgingTcp resources.
 */
export interface FwSessionAgingTcpState {
    /**
     * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
     */
    forceDeleteTimeout?: pulumi.Input<number>;
    /**
     * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
     */
    forceDeleteTimeout100ms?: pulumi.Input<number>;
    /**
     * TCP Half Close Idle Timeout (sec), default is off (number)
     */
    halfCloseIdleTimeout?: pulumi.Input<number>;
    /**
     * TCP Half Open Idle Timeout (sec), default is off (number)
     */
    halfOpenIdleTimeout?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    portCfgs?: pulumi.Input<pulumi.Input<inputs.FwSessionAgingTcpPortCfg>[]>;
    /**
     * Idle Timeout (sec), default is 600 (number)
     */
    tcpIdleTimeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FwSessionAgingTcp resource.
 */
export interface FwSessionAgingTcpArgs {
    /**
     * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
     */
    forceDeleteTimeout?: pulumi.Input<number>;
    /**
     * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
     */
    forceDeleteTimeout100ms?: pulumi.Input<number>;
    /**
     * TCP Half Close Idle Timeout (sec), default is off (number)
     */
    halfCloseIdleTimeout?: pulumi.Input<number>;
    /**
     * TCP Half Open Idle Timeout (sec), default is off (number)
     */
    halfOpenIdleTimeout?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    portCfgs?: pulumi.Input<pulumi.Input<inputs.FwSessionAgingTcpPortCfg>[]>;
    /**
     * Idle Timeout (sec), default is 600 (number)
     */
    tcpIdleTimeout?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
