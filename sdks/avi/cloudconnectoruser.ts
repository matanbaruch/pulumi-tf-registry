// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cloudconnectoruser extends pulumi.CustomResource {
    /**
     * Get an existing Cloudconnectoruser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudconnectoruserState, opts?: pulumi.CustomResourceOptions): Cloudconnectoruser {
        return new Cloudconnectoruser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/cloudconnectoruser:Cloudconnectoruser';

    /**
     * Returns true if the given object is an instance of Cloudconnectoruser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cloudconnectoruser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cloudconnectoruser.__pulumiType;
    }

    public readonly azureServiceprincipals!: pulumi.Output<outputs.CloudconnectoruserAzureServiceprincipal[] | undefined>;
    public readonly azureUserpasses!: pulumi.Output<outputs.CloudconnectoruserAzureUserpass[] | undefined>;
    public readonly configpbAttributes!: pulumi.Output<outputs.CloudconnectoruserConfigpbAttribute[] | undefined>;
    public readonly gcpCredentials!: pulumi.Output<outputs.CloudconnectoruserGcpCredential[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nsxtCredentials!: pulumi.Output<outputs.CloudconnectoruserNsxtCredential[] | undefined>;
    public readonly ociCredentials!: pulumi.Output<outputs.CloudconnectoruserOciCredential[] | undefined>;
    public readonly password!: pulumi.Output<string>;
    public readonly privateKey!: pulumi.Output<string>;
    public readonly publicKey!: pulumi.Output<string>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly tencentCredentials!: pulumi.Output<outputs.CloudconnectoruserTencentCredential[] | undefined>;
    public readonly uuid!: pulumi.Output<string>;
    public readonly vcenterCredentials!: pulumi.Output<outputs.CloudconnectoruserVcenterCredential[] | undefined>;

    /**
     * Create a Cloudconnectoruser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CloudconnectoruserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudconnectoruserArgs | CloudconnectoruserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudconnectoruserState | undefined;
            resourceInputs["azureServiceprincipals"] = state ? state.azureServiceprincipals : undefined;
            resourceInputs["azureUserpasses"] = state ? state.azureUserpasses : undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["gcpCredentials"] = state ? state.gcpCredentials : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nsxtCredentials"] = state ? state.nsxtCredentials : undefined;
            resourceInputs["ociCredentials"] = state ? state.ociCredentials : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["tencentCredentials"] = state ? state.tencentCredentials : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["vcenterCredentials"] = state ? state.vcenterCredentials : undefined;
        } else {
            const args = argsOrState as CloudconnectoruserArgs | undefined;
            resourceInputs["azureServiceprincipals"] = args ? args.azureServiceprincipals : undefined;
            resourceInputs["azureUserpasses"] = args ? args.azureUserpasses : undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["gcpCredentials"] = args ? args.gcpCredentials : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nsxtCredentials"] = args ? args.nsxtCredentials : undefined;
            resourceInputs["ociCredentials"] = args ? args.ociCredentials : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["privateKey"] = args?.privateKey ? pulumi.secret(args.privateKey) : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["tencentCredentials"] = args ? args.tencentCredentials : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["vcenterCredentials"] = args ? args.vcenterCredentials : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "privateKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Cloudconnectoruser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cloudconnectoruser resources.
 */
export interface CloudconnectoruserState {
    azureServiceprincipals?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserAzureServiceprincipal>[]>;
    azureUserpasses?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserAzureUserpass>[]>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserConfigpbAttribute>[]>;
    gcpCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserGcpCredential>[]>;
    name?: pulumi.Input<string>;
    nsxtCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserNsxtCredential>[]>;
    ociCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserOciCredential>[]>;
    password?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    tencentCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserTencentCredential>[]>;
    uuid?: pulumi.Input<string>;
    vcenterCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserVcenterCredential>[]>;
}

/**
 * The set of arguments for constructing a Cloudconnectoruser resource.
 */
export interface CloudconnectoruserArgs {
    azureServiceprincipals?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserAzureServiceprincipal>[]>;
    azureUserpasses?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserAzureUserpass>[]>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserConfigpbAttribute>[]>;
    gcpCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserGcpCredential>[]>;
    name?: pulumi.Input<string>;
    nsxtCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserNsxtCredential>[]>;
    ociCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserOciCredential>[]>;
    password?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    tencentCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserTencentCredential>[]>;
    uuid?: pulumi.Input<string>;
    vcenterCredentials?: pulumi.Input<pulumi.Input<inputs.CloudconnectoruserVcenterCredential>[]>;
}
