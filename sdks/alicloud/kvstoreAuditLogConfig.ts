// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KvstoreAuditLogConfig extends pulumi.CustomResource {
    /**
     * Get an existing KvstoreAuditLogConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KvstoreAuditLogConfigState, opts?: pulumi.CustomResourceOptions): KvstoreAuditLogConfig {
        return new KvstoreAuditLogConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/kvstoreAuditLogConfig:KvstoreAuditLogConfig';

    /**
     * Returns true if the given object is an instance of KvstoreAuditLogConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KvstoreAuditLogConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KvstoreAuditLogConfig.__pulumiType;
    }

    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly dbAudit!: pulumi.Output<boolean | undefined>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly retention!: pulumi.Output<number | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.KvstoreAuditLogConfigTimeouts | undefined>;

    /**
     * Create a KvstoreAuditLogConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KvstoreAuditLogConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KvstoreAuditLogConfigArgs | KvstoreAuditLogConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KvstoreAuditLogConfigState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dbAudit"] = state ? state.dbAudit : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["retention"] = state ? state.retention : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as KvstoreAuditLogConfigArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["dbAudit"] = args ? args.dbAudit : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["retention"] = args ? args.retention : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KvstoreAuditLogConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KvstoreAuditLogConfig resources.
 */
export interface KvstoreAuditLogConfigState {
    createTime?: pulumi.Input<string>;
    dbAudit?: pulumi.Input<boolean>;
    instanceId?: pulumi.Input<string>;
    retention?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KvstoreAuditLogConfigTimeouts>;
}

/**
 * The set of arguments for constructing a KvstoreAuditLogConfig resource.
 */
export interface KvstoreAuditLogConfigArgs {
    dbAudit?: pulumi.Input<boolean>;
    instanceId: pulumi.Input<string>;
    retention?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.KvstoreAuditLogConfigTimeouts>;
}
