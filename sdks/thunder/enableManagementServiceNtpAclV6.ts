// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EnableManagementServiceNtpAclV6 extends pulumi.CustomResource {
    /**
     * Get an existing EnableManagementServiceNtpAclV6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnableManagementServiceNtpAclV6State, opts?: pulumi.CustomResourceOptions): EnableManagementServiceNtpAclV6 {
        return new EnableManagementServiceNtpAclV6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/enableManagementServiceNtpAclV6:EnableManagementServiceNtpAclV6';

    /**
     * Returns true if the given object is an instance of EnableManagementServiceNtpAclV6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnableManagementServiceNtpAclV6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnableManagementServiceNtpAclV6.__pulumiType;
    }

    /**
     * ACL name
     */
    public readonly aclName!: pulumi.Output<string>;
    /**
     * All Data Interfaces
     */
    public readonly allDataIntf!: pulumi.Output<number | undefined>;
    public readonly ethCfgs!: pulumi.Output<outputs.EnableManagementServiceNtpAclV6EthCfg[] | undefined>;
    /**
     * Management Interface
     */
    public readonly management!: pulumi.Output<number | undefined>;
    public readonly tunnelCfgs!: pulumi.Output<outputs.EnableManagementServiceNtpAclV6TunnelCfg[] | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    public readonly veCfgs!: pulumi.Output<outputs.EnableManagementServiceNtpAclV6VeCfg[] | undefined>;

    /**
     * Create a EnableManagementServiceNtpAclV6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnableManagementServiceNtpAclV6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnableManagementServiceNtpAclV6Args | EnableManagementServiceNtpAclV6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnableManagementServiceNtpAclV6State | undefined;
            resourceInputs["aclName"] = state ? state.aclName : undefined;
            resourceInputs["allDataIntf"] = state ? state.allDataIntf : undefined;
            resourceInputs["ethCfgs"] = state ? state.ethCfgs : undefined;
            resourceInputs["management"] = state ? state.management : undefined;
            resourceInputs["tunnelCfgs"] = state ? state.tunnelCfgs : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["veCfgs"] = state ? state.veCfgs : undefined;
        } else {
            const args = argsOrState as EnableManagementServiceNtpAclV6Args | undefined;
            if ((!args || args.aclName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclName'");
            }
            resourceInputs["aclName"] = args ? args.aclName : undefined;
            resourceInputs["allDataIntf"] = args ? args.allDataIntf : undefined;
            resourceInputs["ethCfgs"] = args ? args.ethCfgs : undefined;
            resourceInputs["management"] = args ? args.management : undefined;
            resourceInputs["tunnelCfgs"] = args ? args.tunnelCfgs : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["veCfgs"] = args ? args.veCfgs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnableManagementServiceNtpAclV6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnableManagementServiceNtpAclV6 resources.
 */
export interface EnableManagementServiceNtpAclV6State {
    /**
     * ACL name
     */
    aclName?: pulumi.Input<string>;
    /**
     * All Data Interfaces
     */
    allDataIntf?: pulumi.Input<number>;
    ethCfgs?: pulumi.Input<pulumi.Input<inputs.EnableManagementServiceNtpAclV6EthCfg>[]>;
    /**
     * Management Interface
     */
    management?: pulumi.Input<number>;
    tunnelCfgs?: pulumi.Input<pulumi.Input<inputs.EnableManagementServiceNtpAclV6TunnelCfg>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    veCfgs?: pulumi.Input<pulumi.Input<inputs.EnableManagementServiceNtpAclV6VeCfg>[]>;
}

/**
 * The set of arguments for constructing a EnableManagementServiceNtpAclV6 resource.
 */
export interface EnableManagementServiceNtpAclV6Args {
    /**
     * ACL name
     */
    aclName: pulumi.Input<string>;
    /**
     * All Data Interfaces
     */
    allDataIntf?: pulumi.Input<number>;
    ethCfgs?: pulumi.Input<pulumi.Input<inputs.EnableManagementServiceNtpAclV6EthCfg>[]>;
    /**
     * Management Interface
     */
    management?: pulumi.Input<number>;
    tunnelCfgs?: pulumi.Input<pulumi.Input<inputs.EnableManagementServiceNtpAclV6TunnelCfg>[]>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    veCfgs?: pulumi.Input<pulumi.Input<inputs.EnableManagementServiceNtpAclV6VeCfg>[]>;
}
