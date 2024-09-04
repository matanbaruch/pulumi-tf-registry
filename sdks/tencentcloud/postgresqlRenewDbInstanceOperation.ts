// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PostgresqlRenewDbInstanceOperation extends pulumi.CustomResource {
    /**
     * Get an existing PostgresqlRenewDbInstanceOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PostgresqlRenewDbInstanceOperationState, opts?: pulumi.CustomResourceOptions): PostgresqlRenewDbInstanceOperation {
        return new PostgresqlRenewDbInstanceOperation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/postgresqlRenewDbInstanceOperation:PostgresqlRenewDbInstanceOperation';

    /**
     * Returns true if the given object is an instance of PostgresqlRenewDbInstanceOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PostgresqlRenewDbInstanceOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PostgresqlRenewDbInstanceOperation.__pulumiType;
    }

    /**
     * Whether to automatically use vouchers. 1:yes, 0:no. Default value:0.
     */
    public readonly autoVoucher!: pulumi.Output<number | undefined>;
    /**
     * Instance ID in the format of postgres-6fego161.
     */
    public readonly dbInstanceId!: pulumi.Output<string>;
    /**
     * Renewal duration in months.
     */
    public readonly period!: pulumi.Output<number>;
    /**
     * Voucher ID list (only one voucher can be specified currently).
     */
    public readonly voucherIds!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PostgresqlRenewDbInstanceOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PostgresqlRenewDbInstanceOperationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PostgresqlRenewDbInstanceOperationArgs | PostgresqlRenewDbInstanceOperationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PostgresqlRenewDbInstanceOperationState | undefined;
            resourceInputs["autoVoucher"] = state ? state.autoVoucher : undefined;
            resourceInputs["dbInstanceId"] = state ? state.dbInstanceId : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["voucherIds"] = state ? state.voucherIds : undefined;
        } else {
            const args = argsOrState as PostgresqlRenewDbInstanceOperationArgs | undefined;
            if ((!args || args.dbInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbInstanceId'");
            }
            if ((!args || args.period === undefined) && !opts.urn) {
                throw new Error("Missing required property 'period'");
            }
            resourceInputs["autoVoucher"] = args ? args.autoVoucher : undefined;
            resourceInputs["dbInstanceId"] = args ? args.dbInstanceId : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["voucherIds"] = args ? args.voucherIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PostgresqlRenewDbInstanceOperation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PostgresqlRenewDbInstanceOperation resources.
 */
export interface PostgresqlRenewDbInstanceOperationState {
    /**
     * Whether to automatically use vouchers. 1:yes, 0:no. Default value:0.
     */
    autoVoucher?: pulumi.Input<number>;
    /**
     * Instance ID in the format of postgres-6fego161.
     */
    dbInstanceId?: pulumi.Input<string>;
    /**
     * Renewal duration in months.
     */
    period?: pulumi.Input<number>;
    /**
     * Voucher ID list (only one voucher can be specified currently).
     */
    voucherIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a PostgresqlRenewDbInstanceOperation resource.
 */
export interface PostgresqlRenewDbInstanceOperationArgs {
    /**
     * Whether to automatically use vouchers. 1:yes, 0:no. Default value:0.
     */
    autoVoucher?: pulumi.Input<number>;
    /**
     * Instance ID in the format of postgres-6fego161.
     */
    dbInstanceId: pulumi.Input<string>;
    /**
     * Renewal duration in months.
     */
    period: pulumi.Input<number>;
    /**
     * Voucher ID list (only one voucher can be specified currently).
     */
    voucherIds?: pulumi.Input<pulumi.Input<string>[]>;
}
