// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LogsQueryDefinition extends pulumi.CustomResource {
    /**
     * Get an existing LogsQueryDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogsQueryDefinitionState, opts?: pulumi.CustomResourceOptions): LogsQueryDefinition {
        return new LogsQueryDefinition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/logsQueryDefinition:LogsQueryDefinition';

    /**
     * Returns true if the given object is an instance of LogsQueryDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogsQueryDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogsQueryDefinition.__pulumiType;
    }

    /**
     * Optionally define specific log groups as part of your query definition
     */
    public readonly logGroupNames!: pulumi.Output<string[]>;
    /**
     * A name for the saved query definition
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique identifier of a query definition
     */
    public /*out*/ readonly queryDefinitionId!: pulumi.Output<string>;
    /**
     * The query string to use for this definition
     */
    public readonly queryString!: pulumi.Output<string>;

    /**
     * Create a LogsQueryDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogsQueryDefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogsQueryDefinitionArgs | LogsQueryDefinitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogsQueryDefinitionState | undefined;
            resourceInputs["logGroupNames"] = state ? state.logGroupNames : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["queryDefinitionId"] = state ? state.queryDefinitionId : undefined;
            resourceInputs["queryString"] = state ? state.queryString : undefined;
        } else {
            const args = argsOrState as LogsQueryDefinitionArgs | undefined;
            if ((!args || args.queryString === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queryString'");
            }
            resourceInputs["logGroupNames"] = args ? args.logGroupNames : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queryString"] = args ? args.queryString : undefined;
            resourceInputs["queryDefinitionId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogsQueryDefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogsQueryDefinition resources.
 */
export interface LogsQueryDefinitionState {
    /**
     * Optionally define specific log groups as part of your query definition
     */
    logGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A name for the saved query definition
     */
    name?: pulumi.Input<string>;
    /**
     * Unique identifier of a query definition
     */
    queryDefinitionId?: pulumi.Input<string>;
    /**
     * The query string to use for this definition
     */
    queryString?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LogsQueryDefinition resource.
 */
export interface LogsQueryDefinitionArgs {
    /**
     * Optionally define specific log groups as part of your query definition
     */
    logGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A name for the saved query definition
     */
    name?: pulumi.Input<string>;
    /**
     * The query string to use for this definition
     */
    queryString: pulumi.Input<string>;
}
