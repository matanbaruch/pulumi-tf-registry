// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityAccountResource extends pulumi.CustomResource {
    /**
     * Get an existing SecurityAccountResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityAccountResourceState, opts?: pulumi.CustomResourceOptions): SecurityAccountResource {
        return new SecurityAccountResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netapp-ontap:index/securityAccountResource:SecurityAccountResource';

    /**
     * Returns true if the given object is an instance of SecurityAccountResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityAccountResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityAccountResource.__pulumiType;
    }

    /**
     * List of applications
     */
    public readonly applications!: pulumi.Output<outputs.SecurityAccountResourceApplication[] | undefined>;
    /**
     * Account comment
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Connection profile name
     */
    public readonly cxProfileName!: pulumi.Output<string>;
    /**
     * Account locked
     */
    public readonly locked!: pulumi.Output<boolean>;
    /**
     * SecurityAccount name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Account owner
     */
    public readonly owner!: pulumi.Output<outputs.SecurityAccountResourceOwner>;
    /**
     * Account owner uuid
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * Account password
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Account role
     */
    public readonly role!: pulumi.Output<outputs.SecurityAccountResourceRole>;
    /**
     * Second authentication method
     */
    public readonly secondAuthenticationMethod!: pulumi.Output<string | undefined>;

    /**
     * Create a SecurityAccountResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityAccountResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityAccountResourceArgs | SecurityAccountResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityAccountResourceState | undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["cxProfileName"] = state ? state.cxProfileName : undefined;
            resourceInputs["locked"] = state ? state.locked : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["ownerId"] = state ? state.ownerId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["secondAuthenticationMethod"] = state ? state.secondAuthenticationMethod : undefined;
        } else {
            const args = argsOrState as SecurityAccountResourceArgs | undefined;
            if ((!args || args.cxProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cxProfileName'");
            }
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["cxProfileName"] = args ? args.cxProfileName : undefined;
            resourceInputs["locked"] = args ? args.locked : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["secondAuthenticationMethod"] = args ? args.secondAuthenticationMethod : undefined;
            resourceInputs["ownerId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SecurityAccountResource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityAccountResource resources.
 */
export interface SecurityAccountResourceState {
    /**
     * List of applications
     */
    applications?: pulumi.Input<pulumi.Input<inputs.SecurityAccountResourceApplication>[]>;
    /**
     * Account comment
     */
    comment?: pulumi.Input<string>;
    /**
     * Connection profile name
     */
    cxProfileName?: pulumi.Input<string>;
    /**
     * Account locked
     */
    locked?: pulumi.Input<boolean>;
    /**
     * SecurityAccount name
     */
    name?: pulumi.Input<string>;
    /**
     * Account owner
     */
    owner?: pulumi.Input<inputs.SecurityAccountResourceOwner>;
    /**
     * Account owner uuid
     */
    ownerId?: pulumi.Input<string>;
    /**
     * Account password
     */
    password?: pulumi.Input<string>;
    /**
     * Account role
     */
    role?: pulumi.Input<inputs.SecurityAccountResourceRole>;
    /**
     * Second authentication method
     */
    secondAuthenticationMethod?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityAccountResource resource.
 */
export interface SecurityAccountResourceArgs {
    /**
     * List of applications
     */
    applications?: pulumi.Input<pulumi.Input<inputs.SecurityAccountResourceApplication>[]>;
    /**
     * Account comment
     */
    comment?: pulumi.Input<string>;
    /**
     * Connection profile name
     */
    cxProfileName: pulumi.Input<string>;
    /**
     * Account locked
     */
    locked?: pulumi.Input<boolean>;
    /**
     * SecurityAccount name
     */
    name?: pulumi.Input<string>;
    /**
     * Account owner
     */
    owner?: pulumi.Input<inputs.SecurityAccountResourceOwner>;
    /**
     * Account password
     */
    password?: pulumi.Input<string>;
    /**
     * Account role
     */
    role?: pulumi.Input<inputs.SecurityAccountResourceRole>;
    /**
     * Second authentication method
     */
    secondAuthenticationMethod?: pulumi.Input<string>;
}
