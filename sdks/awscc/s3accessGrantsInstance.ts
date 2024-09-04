// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class S3AccessGrantsInstance extends pulumi.CustomResource {
    /**
     * Get an existing S3AccessGrantsInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3AccessGrantsInstanceState, opts?: pulumi.CustomResourceOptions): S3AccessGrantsInstance {
        return new S3AccessGrantsInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/s3AccessGrantsInstance:S3AccessGrantsInstance';

    /**
     * Returns true if the given object is an instance of S3AccessGrantsInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3AccessGrantsInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3AccessGrantsInstance.__pulumiType;
    }

    /**
     * The Amazon Resource Name (ARN) of the specified Access Grants instance.
     */
    public /*out*/ readonly accessGrantsInstanceArn!: pulumi.Output<string>;
    /**
     * A unique identifier for the specified access grants instance.
     */
    public /*out*/ readonly accessGrantsInstanceId!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the specified AWS Identity Center.
     */
    public readonly identityCenterArn!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.S3AccessGrantsInstanceTag[]>;

    /**
     * Create a S3AccessGrantsInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: S3AccessGrantsInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3AccessGrantsInstanceArgs | S3AccessGrantsInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3AccessGrantsInstanceState | undefined;
            resourceInputs["accessGrantsInstanceArn"] = state ? state.accessGrantsInstanceArn : undefined;
            resourceInputs["accessGrantsInstanceId"] = state ? state.accessGrantsInstanceId : undefined;
            resourceInputs["identityCenterArn"] = state ? state.identityCenterArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as S3AccessGrantsInstanceArgs | undefined;
            resourceInputs["identityCenterArn"] = args ? args.identityCenterArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accessGrantsInstanceArn"] = undefined /*out*/;
            resourceInputs["accessGrantsInstanceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3AccessGrantsInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3AccessGrantsInstance resources.
 */
export interface S3AccessGrantsInstanceState {
    /**
     * The Amazon Resource Name (ARN) of the specified Access Grants instance.
     */
    accessGrantsInstanceArn?: pulumi.Input<string>;
    /**
     * A unique identifier for the specified access grants instance.
     */
    accessGrantsInstanceId?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the specified AWS Identity Center.
     */
    identityCenterArn?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.S3AccessGrantsInstanceTag>[]>;
}

/**
 * The set of arguments for constructing a S3AccessGrantsInstance resource.
 */
export interface S3AccessGrantsInstanceArgs {
    /**
     * The Amazon Resource Name (ARN) of the specified AWS Identity Center.
     */
    identityCenterArn?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.S3AccessGrantsInstanceTag>[]>;
}
