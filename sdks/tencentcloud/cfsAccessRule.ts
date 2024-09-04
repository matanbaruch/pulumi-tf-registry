// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CfsAccessRule extends pulumi.CustomResource {
    /**
     * Get an existing CfsAccessRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CfsAccessRuleState, opts?: pulumi.CustomResourceOptions): CfsAccessRule {
        return new CfsAccessRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cfsAccessRule:CfsAccessRule';

    /**
     * Returns true if the given object is an instance of CfsAccessRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CfsAccessRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CfsAccessRule.__pulumiType;
    }

    /**
     * ID of a access group.
     */
    public readonly accessGroupId!: pulumi.Output<string>;
    /**
     * A single IP or a single IP address range such as 10.1.10.11 or 10.10.1.0/24 indicates that all IPs are allowed. Please
     * note that the IP entered should be CVM's private IP.
     */
    public readonly authClientIp!: pulumi.Output<string>;
    /**
     * The priority level of rule. Valid value ranges: (1~100). `1` indicates the highest priority.
     */
    public readonly priority!: pulumi.Output<number>;
    /**
     * Read and write permissions. Valid values are `RO` and `RW`. and default is `RO`.
     */
    public readonly rwPermission!: pulumi.Output<string | undefined>;
    /**
     * The permissions of accessing users. Valid values are `all_squash`, `no_all_squash`, `root_squash` and `no_root_squash`.
     * and default is `root_squash`. `all_squash` indicates that all access users are mapped as anonymous users or user groups;
     * `no_all_squash` indicates that access users will match local users first and be mapped to anonymous users or user groups
     * after matching failed; `root_squash` indicates that map access root users to anonymous users or user groups;
     * `no_root_squash` indicates that access root users keep root account permission.
     */
    public readonly userPermission!: pulumi.Output<string | undefined>;

    /**
     * Create a CfsAccessRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CfsAccessRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CfsAccessRuleArgs | CfsAccessRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CfsAccessRuleState | undefined;
            resourceInputs["accessGroupId"] = state ? state.accessGroupId : undefined;
            resourceInputs["authClientIp"] = state ? state.authClientIp : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["rwPermission"] = state ? state.rwPermission : undefined;
            resourceInputs["userPermission"] = state ? state.userPermission : undefined;
        } else {
            const args = argsOrState as CfsAccessRuleArgs | undefined;
            if ((!args || args.accessGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessGroupId'");
            }
            if ((!args || args.authClientIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authClientIp'");
            }
            if ((!args || args.priority === undefined) && !opts.urn) {
                throw new Error("Missing required property 'priority'");
            }
            resourceInputs["accessGroupId"] = args ? args.accessGroupId : undefined;
            resourceInputs["authClientIp"] = args ? args.authClientIp : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["rwPermission"] = args ? args.rwPermission : undefined;
            resourceInputs["userPermission"] = args ? args.userPermission : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CfsAccessRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CfsAccessRule resources.
 */
export interface CfsAccessRuleState {
    /**
     * ID of a access group.
     */
    accessGroupId?: pulumi.Input<string>;
    /**
     * A single IP or a single IP address range such as 10.1.10.11 or 10.10.1.0/24 indicates that all IPs are allowed. Please
     * note that the IP entered should be CVM's private IP.
     */
    authClientIp?: pulumi.Input<string>;
    /**
     * The priority level of rule. Valid value ranges: (1~100). `1` indicates the highest priority.
     */
    priority?: pulumi.Input<number>;
    /**
     * Read and write permissions. Valid values are `RO` and `RW`. and default is `RO`.
     */
    rwPermission?: pulumi.Input<string>;
    /**
     * The permissions of accessing users. Valid values are `all_squash`, `no_all_squash`, `root_squash` and `no_root_squash`.
     * and default is `root_squash`. `all_squash` indicates that all access users are mapped as anonymous users or user groups;
     * `no_all_squash` indicates that access users will match local users first and be mapped to anonymous users or user groups
     * after matching failed; `root_squash` indicates that map access root users to anonymous users or user groups;
     * `no_root_squash` indicates that access root users keep root account permission.
     */
    userPermission?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CfsAccessRule resource.
 */
export interface CfsAccessRuleArgs {
    /**
     * ID of a access group.
     */
    accessGroupId: pulumi.Input<string>;
    /**
     * A single IP or a single IP address range such as 10.1.10.11 or 10.10.1.0/24 indicates that all IPs are allowed. Please
     * note that the IP entered should be CVM's private IP.
     */
    authClientIp: pulumi.Input<string>;
    /**
     * The priority level of rule. Valid value ranges: (1~100). `1` indicates the highest priority.
     */
    priority: pulumi.Input<number>;
    /**
     * Read and write permissions. Valid values are `RO` and `RW`. and default is `RO`.
     */
    rwPermission?: pulumi.Input<string>;
    /**
     * The permissions of accessing users. Valid values are `all_squash`, `no_all_squash`, `root_squash` and `no_root_squash`.
     * and default is `root_squash`. `all_squash` indicates that all access users are mapped as anonymous users or user groups;
     * `no_all_squash` indicates that access users will match local users first and be mapped to anonymous users or user groups
     * after matching failed; `root_squash` indicates that map access root users to anonymous users or user groups;
     * `no_root_squash` indicates that access root users keep root account permission.
     */
    userPermission?: pulumi.Input<string>;
}
