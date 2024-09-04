// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DmsEnterpriseProxyAccess extends pulumi.CustomResource {
    /**
     * Get an existing DmsEnterpriseProxyAccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DmsEnterpriseProxyAccessState, opts?: pulumi.CustomResourceOptions): DmsEnterpriseProxyAccess {
        return new DmsEnterpriseProxyAccess(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/dmsEnterpriseProxyAccess:DmsEnterpriseProxyAccess';

    /**
     * Returns true if the given object is an instance of DmsEnterpriseProxyAccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DmsEnterpriseProxyAccess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DmsEnterpriseProxyAccess.__pulumiType;
    }

    public /*out*/ readonly accessId!: pulumi.Output<string>;
    public /*out*/ readonly accessSecret!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly indepAccount!: pulumi.Output<string | undefined>;
    public readonly indepPassword!: pulumi.Output<string | undefined>;
    public /*out*/ readonly instanceId!: pulumi.Output<string>;
    public /*out*/ readonly originInfo!: pulumi.Output<string>;
    public readonly proxyAccessId!: pulumi.Output<string>;
    public readonly proxyId!: pulumi.Output<string>;
    public readonly userId!: pulumi.Output<string>;
    public /*out*/ readonly userName!: pulumi.Output<string>;
    public /*out*/ readonly userUid!: pulumi.Output<string>;

    /**
     * Create a DmsEnterpriseProxyAccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DmsEnterpriseProxyAccessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DmsEnterpriseProxyAccessArgs | DmsEnterpriseProxyAccessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DmsEnterpriseProxyAccessState | undefined;
            resourceInputs["accessId"] = state ? state.accessId : undefined;
            resourceInputs["accessSecret"] = state ? state.accessSecret : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["indepAccount"] = state ? state.indepAccount : undefined;
            resourceInputs["indepPassword"] = state ? state.indepPassword : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["originInfo"] = state ? state.originInfo : undefined;
            resourceInputs["proxyAccessId"] = state ? state.proxyAccessId : undefined;
            resourceInputs["proxyId"] = state ? state.proxyId : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
            resourceInputs["userUid"] = state ? state.userUid : undefined;
        } else {
            const args = argsOrState as DmsEnterpriseProxyAccessArgs | undefined;
            if ((!args || args.proxyId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'proxyId'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["indepAccount"] = args ? args.indepAccount : undefined;
            resourceInputs["indepPassword"] = args?.indepPassword ? pulumi.secret(args.indepPassword) : undefined;
            resourceInputs["proxyAccessId"] = args ? args.proxyAccessId : undefined;
            resourceInputs["proxyId"] = args ? args.proxyId : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["accessId"] = undefined /*out*/;
            resourceInputs["accessSecret"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["originInfo"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
            resourceInputs["userUid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessSecret", "indepPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DmsEnterpriseProxyAccess.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DmsEnterpriseProxyAccess resources.
 */
export interface DmsEnterpriseProxyAccessState {
    accessId?: pulumi.Input<string>;
    accessSecret?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    indepAccount?: pulumi.Input<string>;
    indepPassword?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    originInfo?: pulumi.Input<string>;
    proxyAccessId?: pulumi.Input<string>;
    proxyId?: pulumi.Input<string>;
    userId?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
    userUid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DmsEnterpriseProxyAccess resource.
 */
export interface DmsEnterpriseProxyAccessArgs {
    indepAccount?: pulumi.Input<string>;
    indepPassword?: pulumi.Input<string>;
    proxyAccessId?: pulumi.Input<string>;
    proxyId: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
