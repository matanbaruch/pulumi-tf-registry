// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentitySmtpCredential extends pulumi.CustomResource {
    /**
     * Get an existing IdentitySmtpCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentitySmtpCredentialState, opts?: pulumi.CustomResourceOptions): IdentitySmtpCredential {
        return new IdentitySmtpCredential(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/identitySmtpCredential:IdentitySmtpCredential';

    /**
     * Returns true if the given object is an instance of IdentitySmtpCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentitySmtpCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentitySmtpCredential.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly inactiveState!: pulumi.Output<string>;
    public /*out*/ readonly password!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeExpires!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentitySmtpCredentialTimeouts | undefined>;
    public readonly userId!: pulumi.Output<string>;
    public /*out*/ readonly username!: pulumi.Output<string>;

    /**
     * Create a IdentitySmtpCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentitySmtpCredentialArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentitySmtpCredentialArgs | IdentitySmtpCredentialState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentitySmtpCredentialState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["inactiveState"] = state ? state.inactiveState : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeExpires"] = state ? state.timeExpires : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as IdentitySmtpCredentialArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["inactiveState"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeExpires"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentitySmtpCredential.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentitySmtpCredential resources.
 */
export interface IdentitySmtpCredentialState {
    description?: pulumi.Input<string>;
    inactiveState?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeExpires?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentitySmtpCredentialTimeouts>;
    userId?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentitySmtpCredential resource.
 */
export interface IdentitySmtpCredentialArgs {
    description: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentitySmtpCredentialTimeouts>;
    userId: pulumi.Input<string>;
}
