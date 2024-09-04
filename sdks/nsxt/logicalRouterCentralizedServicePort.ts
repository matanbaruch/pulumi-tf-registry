// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogicalRouterCentralizedServicePort extends pulumi.CustomResource {
    /**
     * Get an existing LogicalRouterCentralizedServicePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogicalRouterCentralizedServicePortState, opts?: pulumi.CustomResourceOptions): LogicalRouterCentralizedServicePort {
        return new LogicalRouterCentralizedServicePort(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/logicalRouterCentralizedServicePort:LogicalRouterCentralizedServicePort';

    /**
     * Returns true if the given object is an instance of LogicalRouterCentralizedServicePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogicalRouterCentralizedServicePort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogicalRouterCentralizedServicePort.__pulumiType;
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
     * Logical router port subnet (ipAddress / prefix length)
     */
    public readonly ipAddress!: pulumi.Output<string>;
    /**
     * Identifier for port on logical switch to connect to
     */
    public readonly linkedLogicalSwitchPortId!: pulumi.Output<string>;
    /**
     * Identifier for logical router on which this port is created
     */
    public readonly logicalRouterId!: pulumi.Output<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.LogicalRouterCentralizedServicePortTag[] | undefined>;
    /**
     * Unicast Reverse Path Forwarding mode
     */
    public readonly urpfMode!: pulumi.Output<string | undefined>;

    /**
     * Create a LogicalRouterCentralizedServicePort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogicalRouterCentralizedServicePortArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogicalRouterCentralizedServicePortArgs | LogicalRouterCentralizedServicePortState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogicalRouterCentralizedServicePortState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["linkedLogicalSwitchPortId"] = state ? state.linkedLogicalSwitchPortId : undefined;
            resourceInputs["logicalRouterId"] = state ? state.logicalRouterId : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["urpfMode"] = state ? state.urpfMode : undefined;
        } else {
            const args = argsOrState as LogicalRouterCentralizedServicePortArgs | undefined;
            if ((!args || args.ipAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAddress'");
            }
            if ((!args || args.linkedLogicalSwitchPortId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'linkedLogicalSwitchPortId'");
            }
            if ((!args || args.logicalRouterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logicalRouterId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["ipAddress"] = args ? args.ipAddress : undefined;
            resourceInputs["linkedLogicalSwitchPortId"] = args ? args.linkedLogicalSwitchPortId : undefined;
            resourceInputs["logicalRouterId"] = args ? args.logicalRouterId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["urpfMode"] = args ? args.urpfMode : undefined;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogicalRouterCentralizedServicePort.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogicalRouterCentralizedServicePort resources.
 */
export interface LogicalRouterCentralizedServicePortState {
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Logical router port subnet (ipAddress / prefix length)
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Identifier for port on logical switch to connect to
     */
    linkedLogicalSwitchPortId?: pulumi.Input<string>;
    /**
     * Identifier for logical router on which this port is created
     */
    logicalRouterId?: pulumi.Input<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LogicalRouterCentralizedServicePortTag>[]>;
    /**
     * Unicast Reverse Path Forwarding mode
     */
    urpfMode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogicalRouterCentralizedServicePort resource.
 */
export interface LogicalRouterCentralizedServicePortArgs {
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Logical router port subnet (ipAddress / prefix length)
     */
    ipAddress: pulumi.Input<string>;
    /**
     * Identifier for port on logical switch to connect to
     */
    linkedLogicalSwitchPortId: pulumi.Input<string>;
    /**
     * Identifier for logical router on which this port is created
     */
    logicalRouterId: pulumi.Input<string>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LogicalRouterCentralizedServicePortTag>[]>;
    /**
     * Unicast Reverse Path Forwarding mode
     */
    urpfMode?: pulumi.Input<string>;
}
