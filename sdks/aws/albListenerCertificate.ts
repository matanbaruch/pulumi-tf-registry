// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AlbListenerCertificate extends pulumi.CustomResource {
    /**
     * Get an existing AlbListenerCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlbListenerCertificateState, opts?: pulumi.CustomResourceOptions): AlbListenerCertificate {
        return new AlbListenerCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/albListenerCertificate:AlbListenerCertificate';

    /**
     * Returns true if the given object is an instance of AlbListenerCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlbListenerCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlbListenerCertificate.__pulumiType;
    }

    public readonly certificateArn!: pulumi.Output<string>;
    public readonly listenerArn!: pulumi.Output<string>;

    /**
     * Create a AlbListenerCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlbListenerCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlbListenerCertificateArgs | AlbListenerCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlbListenerCertificateState | undefined;
            resourceInputs["certificateArn"] = state ? state.certificateArn : undefined;
            resourceInputs["listenerArn"] = state ? state.listenerArn : undefined;
        } else {
            const args = argsOrState as AlbListenerCertificateArgs | undefined;
            if ((!args || args.certificateArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateArn'");
            }
            if ((!args || args.listenerArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listenerArn'");
            }
            resourceInputs["certificateArn"] = args ? args.certificateArn : undefined;
            resourceInputs["listenerArn"] = args ? args.listenerArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlbListenerCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlbListenerCertificate resources.
 */
export interface AlbListenerCertificateState {
    certificateArn?: pulumi.Input<string>;
    listenerArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlbListenerCertificate resource.
 */
export interface AlbListenerCertificateArgs {
    certificateArn: pulumi.Input<string>;
    listenerArn: pulumi.Input<string>;
}
