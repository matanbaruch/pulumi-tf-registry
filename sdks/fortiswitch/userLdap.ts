// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserLdap extends pulumi.CustomResource {
    /**
     * Get an existing UserLdap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserLdapState, opts?: pulumi.CustomResourceOptions): UserLdap {
        return new UserLdap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/userLdap:UserLdap';

    /**
     * Returns true if the given object is an instance of UserLdap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserLdap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserLdap.__pulumiType;
    }

    public readonly caCert!: pulumi.Output<string>;
    public readonly cnid!: pulumi.Output<string>;
    public readonly dn!: pulumi.Output<string>;
    public readonly groupMemberCheck!: pulumi.Output<string>;
    public readonly groupObjectFilter!: pulumi.Output<string>;
    public readonly memberAttr!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly passwordExpiryWarning!: pulumi.Output<string>;
    public readonly passwordRenewal!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<number>;
    public readonly secure!: pulumi.Output<string>;
    public readonly server!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a UserLdap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserLdapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserLdapArgs | UserLdapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserLdapState | undefined;
            resourceInputs["caCert"] = state ? state.caCert : undefined;
            resourceInputs["cnid"] = state ? state.cnid : undefined;
            resourceInputs["dn"] = state ? state.dn : undefined;
            resourceInputs["groupMemberCheck"] = state ? state.groupMemberCheck : undefined;
            resourceInputs["groupObjectFilter"] = state ? state.groupObjectFilter : undefined;
            resourceInputs["memberAttr"] = state ? state.memberAttr : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordExpiryWarning"] = state ? state.passwordExpiryWarning : undefined;
            resourceInputs["passwordRenewal"] = state ? state.passwordRenewal : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["secure"] = state ? state.secure : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as UserLdapArgs | undefined;
            resourceInputs["caCert"] = args ? args.caCert : undefined;
            resourceInputs["cnid"] = args ? args.cnid : undefined;
            resourceInputs["dn"] = args ? args.dn : undefined;
            resourceInputs["groupMemberCheck"] = args ? args.groupMemberCheck : undefined;
            resourceInputs["groupObjectFilter"] = args ? args.groupObjectFilter : undefined;
            resourceInputs["memberAttr"] = args ? args.memberAttr : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordExpiryWarning"] = args ? args.passwordExpiryWarning : undefined;
            resourceInputs["passwordRenewal"] = args ? args.passwordRenewal : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["secure"] = args ? args.secure : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(UserLdap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserLdap resources.
 */
export interface UserLdapState {
    caCert?: pulumi.Input<string>;
    cnid?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    groupMemberCheck?: pulumi.Input<string>;
    groupObjectFilter?: pulumi.Input<string>;
    memberAttr?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    passwordExpiryWarning?: pulumi.Input<string>;
    passwordRenewal?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    secure?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserLdap resource.
 */
export interface UserLdapArgs {
    caCert?: pulumi.Input<string>;
    cnid?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    groupMemberCheck?: pulumi.Input<string>;
    groupObjectFilter?: pulumi.Input<string>;
    memberAttr?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    passwordExpiryWarning?: pulumi.Input<string>;
    passwordRenewal?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    secure?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}
