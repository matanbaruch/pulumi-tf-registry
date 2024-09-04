// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UseridLogin extends pulumi.CustomResource {
    /**
     * Get an existing UseridLogin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UseridLoginState, opts?: pulumi.CustomResourceOptions): UseridLogin {
        return new UseridLogin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'panos:index/useridLogin:UseridLogin';

    /**
     * Returns true if the given object is an instance of UseridLogin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UseridLogin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UseridLogin.__pulumiType;
    }

    /**
     * IP address the user is logging in from
     */
    public readonly ip!: pulumi.Output<string>;
    /**
     * User that should be logged in
     */
    public readonly user!: pulumi.Output<string>;
    /**
     * The vsys to config DAG tags for
     */
    public readonly vsys!: pulumi.Output<string | undefined>;

    /**
     * Create a UseridLogin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UseridLoginArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UseridLoginArgs | UseridLoginState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UseridLoginState | undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["vsys"] = state ? state.vsys : undefined;
        } else {
            const args = argsOrState as UseridLoginArgs | undefined;
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            if ((!args || args.user === undefined) && !opts.urn) {
                throw new Error("Missing required property 'user'");
            }
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["vsys"] = args ? args.vsys : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UseridLogin.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UseridLogin resources.
 */
export interface UseridLoginState {
    /**
     * IP address the user is logging in from
     */
    ip?: pulumi.Input<string>;
    /**
     * User that should be logged in
     */
    user?: pulumi.Input<string>;
    /**
     * The vsys to config DAG tags for
     */
    vsys?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UseridLogin resource.
 */
export interface UseridLoginArgs {
    /**
     * IP address the user is logging in from
     */
    ip: pulumi.Input<string>;
    /**
     * User that should be logged in
     */
    user: pulumi.Input<string>;
    /**
     * The vsys to config DAG tags for
     */
    vsys?: pulumi.Input<string>;
}
