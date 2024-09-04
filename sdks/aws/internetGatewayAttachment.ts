// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InternetGatewayAttachment extends pulumi.CustomResource {
    /**
     * Get an existing InternetGatewayAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InternetGatewayAttachmentState, opts?: pulumi.CustomResourceOptions): InternetGatewayAttachment {
        return new InternetGatewayAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/internetGatewayAttachment:InternetGatewayAttachment';

    /**
     * Returns true if the given object is an instance of InternetGatewayAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InternetGatewayAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InternetGatewayAttachment.__pulumiType;
    }

    public readonly internetGatewayId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.InternetGatewayAttachmentTimeouts | undefined>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a InternetGatewayAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InternetGatewayAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InternetGatewayAttachmentArgs | InternetGatewayAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InternetGatewayAttachmentState | undefined;
            resourceInputs["internetGatewayId"] = state ? state.internetGatewayId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as InternetGatewayAttachmentArgs | undefined;
            if ((!args || args.internetGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'internetGatewayId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["internetGatewayId"] = args ? args.internetGatewayId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InternetGatewayAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InternetGatewayAttachment resources.
 */
export interface InternetGatewayAttachmentState {
    internetGatewayId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.InternetGatewayAttachmentTimeouts>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InternetGatewayAttachment resource.
 */
export interface InternetGatewayAttachmentArgs {
    internetGatewayId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.InternetGatewayAttachmentTimeouts>;
    vpcId: pulumi.Input<string>;
}
