// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlbCaCertificate extends pulumi.CustomResource {
    /**
     * Get an existing SlbCaCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbCaCertificateState, opts?: pulumi.CustomResourceOptions): SlbCaCertificate {
        return new SlbCaCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/slbCaCertificate:SlbCaCertificate';

    /**
     * Returns true if the given object is an instance of SlbCaCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbCaCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbCaCertificate.__pulumiType;
    }

    public readonly caCertificate!: pulumi.Output<string>;
    public readonly caCertificateName!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SlbCaCertificateTimeouts | undefined>;

    /**
     * Create a SlbCaCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlbCaCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbCaCertificateArgs | SlbCaCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbCaCertificateState | undefined;
            resourceInputs["caCertificate"] = state ? state.caCertificate : undefined;
            resourceInputs["caCertificateName"] = state ? state.caCertificateName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SlbCaCertificateArgs | undefined;
            if ((!args || args.caCertificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'caCertificate'");
            }
            resourceInputs["caCertificate"] = args ? args.caCertificate : undefined;
            resourceInputs["caCertificateName"] = args ? args.caCertificateName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbCaCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbCaCertificate resources.
 */
export interface SlbCaCertificateState {
    caCertificate?: pulumi.Input<string>;
    caCertificateName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.SlbCaCertificateTimeouts>;
}

/**
 * The set of arguments for constructing a SlbCaCertificate resource.
 */
export interface SlbCaCertificateArgs {
    caCertificate: pulumi.Input<string>;
    caCertificateName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.SlbCaCertificateTimeouts>;
}
