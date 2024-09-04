// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MysqlRoInstanceIp extends pulumi.CustomResource {
    /**
     * Get an existing MysqlRoInstanceIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlRoInstanceIpState, opts?: pulumi.CustomResourceOptions): MysqlRoInstanceIp {
        return new MysqlRoInstanceIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mysqlRoInstanceIp:MysqlRoInstanceIp';

    /**
     * Returns true if the given object is an instance of MysqlRoInstanceIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlRoInstanceIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlRoInstanceIp.__pulumiType;
    }

    /**
     * Read-only instance ID, in the format: cdbro-3i70uj0k, which is the same as the read-only instance ID displayed on the
     * cloud database console page.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Intranet IP address of the read-only instance.
     */
    public /*out*/ readonly roVip!: pulumi.Output<string>;
    /**
     * Intranet port number of the read-only instance.
     */
    public /*out*/ readonly roVport!: pulumi.Output<number>;
    /**
     * Subnet descriptor, for example: subnet-1typ0s7d.
     */
    public readonly uniqSubnetId!: pulumi.Output<string | undefined>;
    /**
     * vpc descriptor, for example: vpc-a23yt67j, if this field is passed, UniqSubnetId must be passed.
     */
    public readonly uniqVpcId!: pulumi.Output<string | undefined>;

    /**
     * Create a MysqlRoInstanceIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlRoInstanceIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlRoInstanceIpArgs | MysqlRoInstanceIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlRoInstanceIpState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["roVip"] = state ? state.roVip : undefined;
            resourceInputs["roVport"] = state ? state.roVport : undefined;
            resourceInputs["uniqSubnetId"] = state ? state.uniqSubnetId : undefined;
            resourceInputs["uniqVpcId"] = state ? state.uniqVpcId : undefined;
        } else {
            const args = argsOrState as MysqlRoInstanceIpArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["uniqSubnetId"] = args ? args.uniqSubnetId : undefined;
            resourceInputs["uniqVpcId"] = args ? args.uniqVpcId : undefined;
            resourceInputs["roVip"] = undefined /*out*/;
            resourceInputs["roVport"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlRoInstanceIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlRoInstanceIp resources.
 */
export interface MysqlRoInstanceIpState {
    /**
     * Read-only instance ID, in the format: cdbro-3i70uj0k, which is the same as the read-only instance ID displayed on the
     * cloud database console page.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Intranet IP address of the read-only instance.
     */
    roVip?: pulumi.Input<string>;
    /**
     * Intranet port number of the read-only instance.
     */
    roVport?: pulumi.Input<number>;
    /**
     * Subnet descriptor, for example: subnet-1typ0s7d.
     */
    uniqSubnetId?: pulumi.Input<string>;
    /**
     * vpc descriptor, for example: vpc-a23yt67j, if this field is passed, UniqSubnetId must be passed.
     */
    uniqVpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MysqlRoInstanceIp resource.
 */
export interface MysqlRoInstanceIpArgs {
    /**
     * Read-only instance ID, in the format: cdbro-3i70uj0k, which is the same as the read-only instance ID displayed on the
     * cloud database console page.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Subnet descriptor, for example: subnet-1typ0s7d.
     */
    uniqSubnetId?: pulumi.Input<string>;
    /**
     * vpc descriptor, for example: vpc-a23yt67j, if this field is passed, UniqSubnetId must be passed.
     */
    uniqVpcId?: pulumi.Input<string>;
}
