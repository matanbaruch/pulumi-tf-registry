// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlAccessRule extends pulumi.CustomResource {
    /**
     * Get an existing MysqlAccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlAccessRuleState, opts?: pulumi.CustomResourceOptions): MysqlAccessRule {
        return new MysqlAccessRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oraclepaas:index/mysqlAccessRule:MysqlAccessRule';

    /**
     * Returns true if the given object is an instance of MysqlAccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlAccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlAccessRule.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly destination!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly ports!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string | undefined>;
    public readonly serviceInstanceId!: pulumi.Output<string>;
    public readonly source!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MysqlAccessRuleTimeouts | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MysqlAccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlAccessRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlAccessRuleArgs | MysqlAccessRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlAccessRuleState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["serviceInstanceId"] = state ? state.serviceInstanceId : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as MysqlAccessRuleArgs | undefined;
            if ((!args || args.destination === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destination'");
            }
            if ((!args || args.ports === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ports'");
            }
            if ((!args || args.serviceInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceInstanceId'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["serviceInstanceId"] = args ? args.serviceInstanceId : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlAccessRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlAccessRule resources.
 */
export interface MysqlAccessRuleState {
    description?: pulumi.Input<string>;
    destination?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    ports?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    serviceInstanceId?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlAccessRuleTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MysqlAccessRule resource.
 */
export interface MysqlAccessRuleArgs {
    description?: pulumi.Input<string>;
    destination: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    ports: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    serviceInstanceId: pulumi.Input<string>;
    source: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlAccessRuleTimeouts>;
}
