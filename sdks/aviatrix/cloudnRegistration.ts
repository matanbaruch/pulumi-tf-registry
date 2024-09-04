// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudnRegistration extends pulumi.CustomResource {
    /**
     * Get an existing CloudnRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudnRegistrationState, opts?: pulumi.CustomResourceOptions): CloudnRegistration {
        return new CloudnRegistration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/cloudnRegistration:CloudnRegistration';

    /**
     * Returns true if the given object is an instance of CloudnRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudnRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudnRegistration.__pulumiType;
    }

    /**
     * CloudN IP Address or FQDN.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * Changes the Aviatrix CloudN ASN number before you setup Aviatrix Transit Gateway connection configurations.
     */
    public readonly localAsNumber!: pulumi.Output<string>;
    /**
     * CloudN name to register on controller.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * CloudN password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * AS path prepend.
     */
    public readonly prependAsPaths!: pulumi.Output<string[] | undefined>;
    /**
     * CloudN username.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a CloudnRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudnRegistrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudnRegistrationArgs | CloudnRegistrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudnRegistrationState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["localAsNumber"] = state ? state.localAsNumber : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["prependAsPaths"] = state ? state.prependAsPaths : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as CloudnRegistrationArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["localAsNumber"] = args ? args.localAsNumber : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["prependAsPaths"] = args ? args.prependAsPaths : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CloudnRegistration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudnRegistration resources.
 */
export interface CloudnRegistrationState {
    /**
     * CloudN IP Address or FQDN.
     */
    address?: pulumi.Input<string>;
    /**
     * Changes the Aviatrix CloudN ASN number before you setup Aviatrix Transit Gateway connection configurations.
     */
    localAsNumber?: pulumi.Input<string>;
    /**
     * CloudN name to register on controller.
     */
    name?: pulumi.Input<string>;
    /**
     * CloudN password.
     */
    password?: pulumi.Input<string>;
    /**
     * AS path prepend.
     */
    prependAsPaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * CloudN username.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudnRegistration resource.
 */
export interface CloudnRegistrationArgs {
    /**
     * CloudN IP Address or FQDN.
     */
    address: pulumi.Input<string>;
    /**
     * Changes the Aviatrix CloudN ASN number before you setup Aviatrix Transit Gateway connection configurations.
     */
    localAsNumber?: pulumi.Input<string>;
    /**
     * CloudN name to register on controller.
     */
    name?: pulumi.Input<string>;
    /**
     * CloudN password.
     */
    password: pulumi.Input<string>;
    /**
     * AS path prepend.
     */
    prependAsPaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * CloudN username.
     */
    username: pulumi.Input<string>;
}
