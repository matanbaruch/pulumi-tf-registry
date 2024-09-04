// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbUdpMonitor extends pulumi.CustomResource {
    /**
     * Get an existing LbUdpMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbUdpMonitorState, opts?: pulumi.CustomResourceOptions): LbUdpMonitor {
        return new LbUdpMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/lbUdpMonitor:LbUdpMonitor';

    /**
     * Returns true if the given object is an instance of LbUdpMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbUdpMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbUdpMonitor.__pulumiType;
    }

    /**
     * Description of this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Number of consecutive checks that must fail before marking it down
     */
    public readonly fallCount!: pulumi.Output<number | undefined>;
    /**
     * The frequency at which the system issues the monitor check (in seconds)
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not
     * supported
     */
    public readonly monitorPort!: pulumi.Output<string | undefined>;
    /**
     * Expected data, if specified, can be anywhere in the response and it has to be a string, regular expressions are not
     * supported
     */
    public readonly receive!: pulumi.Output<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Number of consecutive checks that must pass before marking it up
     */
    public readonly riseCount!: pulumi.Output<number | undefined>;
    /**
     * The data to be sent to the monitored server.
     */
    public readonly send!: pulumi.Output<string>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.LbUdpMonitorTag[] | undefined>;
    /**
     * Number of seconds the target has to respond to the monitor request
     */
    public readonly timeout!: pulumi.Output<number | undefined>;

    /**
     * Create a LbUdpMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LbUdpMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbUdpMonitorArgs | LbUdpMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbUdpMonitorState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["fallCount"] = state ? state.fallCount : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["monitorPort"] = state ? state.monitorPort : undefined;
            resourceInputs["receive"] = state ? state.receive : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["riseCount"] = state ? state.riseCount : undefined;
            resourceInputs["send"] = state ? state.send : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as LbUdpMonitorArgs | undefined;
            if ((!args || args.receive === undefined) && !opts.urn) {
                throw new Error("Missing required property 'receive'");
            }
            if ((!args || args.send === undefined) && !opts.urn) {
                throw new Error("Missing required property 'send'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["fallCount"] = args ? args.fallCount : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["monitorPort"] = args ? args.monitorPort : undefined;
            resourceInputs["receive"] = args ? args.receive : undefined;
            resourceInputs["riseCount"] = args ? args.riseCount : undefined;
            resourceInputs["send"] = args ? args.send : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbUdpMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbUdpMonitor resources.
 */
export interface LbUdpMonitorState {
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Number of consecutive checks that must fail before marking it down
     */
    fallCount?: pulumi.Input<number>;
    /**
     * The frequency at which the system issues the monitor check (in seconds)
     */
    interval?: pulumi.Input<number>;
    /**
     * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not
     * supported
     */
    monitorPort?: pulumi.Input<string>;
    /**
     * Expected data, if specified, can be anywhere in the response and it has to be a string, regular expressions are not
     * supported
     */
    receive?: pulumi.Input<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Number of consecutive checks that must pass before marking it up
     */
    riseCount?: pulumi.Input<number>;
    /**
     * The data to be sent to the monitored server.
     */
    send?: pulumi.Input<string>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LbUdpMonitorTag>[]>;
    /**
     * Number of seconds the target has to respond to the monitor request
     */
    timeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a LbUdpMonitor resource.
 */
export interface LbUdpMonitorArgs {
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Number of consecutive checks that must fail before marking it down
     */
    fallCount?: pulumi.Input<number>;
    /**
     * The frequency at which the system issues the monitor check (in seconds)
     */
    interval?: pulumi.Input<number>;
    /**
     * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not
     * supported
     */
    monitorPort?: pulumi.Input<string>;
    /**
     * Expected data, if specified, can be anywhere in the response and it has to be a string, regular expressions are not
     * supported
     */
    receive: pulumi.Input<string>;
    /**
     * Number of consecutive checks that must pass before marking it up
     */
    riseCount?: pulumi.Input<number>;
    /**
     * The data to be sent to the monitored server.
     */
    send: pulumi.Input<string>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LbUdpMonitorTag>[]>;
    /**
     * Number of seconds the target has to respond to the monitor request
     */
    timeout?: pulumi.Input<number>;
}
