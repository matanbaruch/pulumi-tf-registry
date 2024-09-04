// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DbbrainSecurityAuditLogExportTask extends pulumi.CustomResource {
    /**
     * Get an existing DbbrainSecurityAuditLogExportTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DbbrainSecurityAuditLogExportTaskState, opts?: pulumi.CustomResourceOptions): DbbrainSecurityAuditLogExportTask {
        return new DbbrainSecurityAuditLogExportTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dbbrainSecurityAuditLogExportTask:DbbrainSecurityAuditLogExportTask';

    /**
     * Returns true if the given object is an instance of DbbrainSecurityAuditLogExportTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DbbrainSecurityAuditLogExportTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DbbrainSecurityAuditLogExportTask.__pulumiType;
    }

    /**
     * request of async id.
     */
    public /*out*/ readonly asyncRequestId!: pulumi.Output<number>;
    /**
     * List of log risk levels, supported values include: 0 no risk; 1 low risk; 2 medium risk; 3 high risk.
     */
    public readonly dangerLevels!: pulumi.Output<number[] | undefined>;
    /**
     * end time.
     */
    public readonly endTime!: pulumi.Output<string>;
    /**
     * product, optional value is mysql.
     */
    public readonly product!: pulumi.Output<string>;
    /**
     * security audit group id.
     */
    public readonly secAuditGroupId!: pulumi.Output<string>;
    /**
     * start time.
     */
    public readonly startTime!: pulumi.Output<string>;

    /**
     * Create a DbbrainSecurityAuditLogExportTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DbbrainSecurityAuditLogExportTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DbbrainSecurityAuditLogExportTaskArgs | DbbrainSecurityAuditLogExportTaskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DbbrainSecurityAuditLogExportTaskState | undefined;
            resourceInputs["asyncRequestId"] = state ? state.asyncRequestId : undefined;
            resourceInputs["dangerLevels"] = state ? state.dangerLevels : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["product"] = state ? state.product : undefined;
            resourceInputs["secAuditGroupId"] = state ? state.secAuditGroupId : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
        } else {
            const args = argsOrState as DbbrainSecurityAuditLogExportTaskArgs | undefined;
            if ((!args || args.endTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endTime'");
            }
            if ((!args || args.product === undefined) && !opts.urn) {
                throw new Error("Missing required property 'product'");
            }
            if ((!args || args.secAuditGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secAuditGroupId'");
            }
            if ((!args || args.startTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startTime'");
            }
            resourceInputs["dangerLevels"] = args ? args.dangerLevels : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["product"] = args ? args.product : undefined;
            resourceInputs["secAuditGroupId"] = args ? args.secAuditGroupId : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["asyncRequestId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DbbrainSecurityAuditLogExportTask.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DbbrainSecurityAuditLogExportTask resources.
 */
export interface DbbrainSecurityAuditLogExportTaskState {
    /**
     * request of async id.
     */
    asyncRequestId?: pulumi.Input<number>;
    /**
     * List of log risk levels, supported values include: 0 no risk; 1 low risk; 2 medium risk; 3 high risk.
     */
    dangerLevels?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * end time.
     */
    endTime?: pulumi.Input<string>;
    /**
     * product, optional value is mysql.
     */
    product?: pulumi.Input<string>;
    /**
     * security audit group id.
     */
    secAuditGroupId?: pulumi.Input<string>;
    /**
     * start time.
     */
    startTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DbbrainSecurityAuditLogExportTask resource.
 */
export interface DbbrainSecurityAuditLogExportTaskArgs {
    /**
     * List of log risk levels, supported values include: 0 no risk; 1 low risk; 2 medium risk; 3 high risk.
     */
    dangerLevels?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * end time.
     */
    endTime: pulumi.Input<string>;
    /**
     * product, optional value is mysql.
     */
    product: pulumi.Input<string>;
    /**
     * security audit group id.
     */
    secAuditGroupId: pulumi.Input<string>;
    /**
     * start time.
     */
    startTime: pulumi.Input<string>;
}
