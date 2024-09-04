// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SqlserverStartXevent extends pulumi.CustomResource {
    /**
     * Get an existing SqlserverStartXevent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlserverStartXeventState, opts?: pulumi.CustomResourceOptions): SqlserverStartXevent {
        return new SqlserverStartXevent(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sqlserverStartXevent:SqlserverStartXevent';

    /**
     * Returns true if the given object is an instance of SqlserverStartXevent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlserverStartXevent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlserverStartXevent.__pulumiType;
    }

    /**
     * Whether to start or stop an extended event.
     */
    public readonly eventConfigs!: pulumi.Output<outputs.SqlserverStartXeventEventConfig[]>;
    /**
     * Instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;

    /**
     * Create a SqlserverStartXevent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlserverStartXeventArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlserverStartXeventArgs | SqlserverStartXeventState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqlserverStartXeventState | undefined;
            resourceInputs["eventConfigs"] = state ? state.eventConfigs : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
        } else {
            const args = argsOrState as SqlserverStartXeventArgs | undefined;
            if ((!args || args.eventConfigs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventConfigs'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["eventConfigs"] = args ? args.eventConfigs : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SqlserverStartXevent.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqlserverStartXevent resources.
 */
export interface SqlserverStartXeventState {
    /**
     * Whether to start or stop an extended event.
     */
    eventConfigs?: pulumi.Input<pulumi.Input<inputs.SqlserverStartXeventEventConfig>[]>;
    /**
     * Instance ID.
     */
    instanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SqlserverStartXevent resource.
 */
export interface SqlserverStartXeventArgs {
    /**
     * Whether to start or stop an extended event.
     */
    eventConfigs: pulumi.Input<pulumi.Input<inputs.SqlserverStartXeventEventConfig>[]>;
    /**
     * Instance ID.
     */
    instanceId: pulumi.Input<string>;
}
