// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BatchCertificate extends pulumi.CustomResource {
    /**
     * Get an existing BatchCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BatchCertificateState, opts?: pulumi.CustomResourceOptions): BatchCertificate {
        return new BatchCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/batchCertificate:BatchCertificate';

    /**
     * Returns true if the given object is an instance of BatchCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BatchCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BatchCertificate.__pulumiType;
    }

    public readonly accountName!: pulumi.Output<string>;
    public readonly certificate!: pulumi.Output<string>;
    public readonly format!: pulumi.Output<string>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string | undefined>;
    public /*out*/ readonly publicData!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly thumbprint!: pulumi.Output<string>;
    public readonly thumbprintAlgorithm!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.BatchCertificateTimeouts | undefined>;

    /**
     * Create a BatchCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BatchCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BatchCertificateArgs | BatchCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BatchCertificateState | undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["publicData"] = state ? state.publicData : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["thumbprint"] = state ? state.thumbprint : undefined;
            resourceInputs["thumbprintAlgorithm"] = state ? state.thumbprintAlgorithm : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BatchCertificateArgs | undefined;
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.certificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificate'");
            }
            if ((!args || args.format === undefined) && !opts.urn) {
                throw new Error("Missing required property 'format'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.thumbprint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'thumbprint'");
            }
            if ((!args || args.thumbprintAlgorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'thumbprintAlgorithm'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["certificate"] = args?.certificate ? pulumi.secret(args.certificate) : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["thumbprint"] = args ? args.thumbprint : undefined;
            resourceInputs["thumbprintAlgorithm"] = args ? args.thumbprintAlgorithm : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["publicData"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["certificate", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(BatchCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BatchCertificate resources.
 */
export interface BatchCertificateState {
    accountName?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    publicData?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    thumbprint?: pulumi.Input<string>;
    thumbprintAlgorithm?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BatchCertificateTimeouts>;
}

/**
 * The set of arguments for constructing a BatchCertificate resource.
 */
export interface BatchCertificateArgs {
    accountName: pulumi.Input<string>;
    certificate: pulumi.Input<string>;
    format: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    thumbprint: pulumi.Input<string>;
    thumbprintAlgorithm: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.BatchCertificateTimeouts>;
}
