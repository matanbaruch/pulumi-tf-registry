// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SqlserverConfigInstanceParam extends pulumi.CustomResource {
    /**
     * Get an existing SqlserverConfigInstanceParam resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlserverConfigInstanceParamState, opts?: pulumi.CustomResourceOptions): SqlserverConfigInstanceParam {
        return new SqlserverConfigInstanceParam(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sqlserverConfigInstanceParam:SqlserverConfigInstanceParam';

    /**
     * Returns true if the given object is an instance of SqlserverConfigInstanceParam.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlserverConfigInstanceParam {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlserverConfigInstanceParam.__pulumiType;
    }

    /**
     * Instance ID.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * List of modified parameters. Each list element has two fields: Name and CurrentValue. Set Name to the parameter name and
     * CurrentValue to the new value after modification. Note: if the instance needs to be restarted for the modified parameter
     * to take effect, it will be restarted immediately or during the maintenance time. Before you modify a parameter, you can
     * use the DescribeInstanceParams API to query whether the instance needs to be restarted.
     */
    public readonly paramLists!: pulumi.Output<outputs.SqlserverConfigInstanceParamParamList[]>;

    /**
     * Create a SqlserverConfigInstanceParam resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlserverConfigInstanceParamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlserverConfigInstanceParamArgs | SqlserverConfigInstanceParamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqlserverConfigInstanceParamState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["paramLists"] = state ? state.paramLists : undefined;
        } else {
            const args = argsOrState as SqlserverConfigInstanceParamArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.paramLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paramLists'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["paramLists"] = args ? args.paramLists : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SqlserverConfigInstanceParam.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqlserverConfigInstanceParam resources.
 */
export interface SqlserverConfigInstanceParamState {
    /**
     * Instance ID.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * List of modified parameters. Each list element has two fields: Name and CurrentValue. Set Name to the parameter name and
     * CurrentValue to the new value after modification. Note: if the instance needs to be restarted for the modified parameter
     * to take effect, it will be restarted immediately or during the maintenance time. Before you modify a parameter, you can
     * use the DescribeInstanceParams API to query whether the instance needs to be restarted.
     */
    paramLists?: pulumi.Input<pulumi.Input<inputs.SqlserverConfigInstanceParamParamList>[]>;
}

/**
 * The set of arguments for constructing a SqlserverConfigInstanceParam resource.
 */
export interface SqlserverConfigInstanceParamArgs {
    /**
     * Instance ID.
     */
    instanceId: pulumi.Input<string>;
    /**
     * List of modified parameters. Each list element has two fields: Name and CurrentValue. Set Name to the parameter name and
     * CurrentValue to the new value after modification. Note: if the instance needs to be restarted for the modified parameter
     * to take effect, it will be restarted immediately or during the maintenance time. Before you modify a parameter, you can
     * use the DescribeInstanceParams API to query whether the instance needs to be restarted.
     */
    paramLists: pulumi.Input<pulumi.Input<inputs.SqlserverConfigInstanceParamParamList>[]>;
}
