// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class QuicksightGroup extends pulumi.CustomResource {
    /**
     * Get an existing QuicksightGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QuicksightGroupState, opts?: pulumi.CustomResourceOptions): QuicksightGroup {
        return new QuicksightGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/quicksightGroup:QuicksightGroup';

    /**
     * Returns true if the given object is an instance of QuicksightGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QuicksightGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QuicksightGroup.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly awsAccountId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly groupName!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string | undefined>;

    /**
     * Create a QuicksightGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QuicksightGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QuicksightGroupArgs | QuicksightGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QuicksightGroupState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["awsAccountId"] = state ? state.awsAccountId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
        } else {
            const args = argsOrState as QuicksightGroupArgs | undefined;
            if ((!args || args.groupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupName'");
            }
            resourceInputs["awsAccountId"] = args ? args.awsAccountId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QuicksightGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering QuicksightGroup resources.
 */
export interface QuicksightGroupState {
    arn?: pulumi.Input<string>;
    awsAccountId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QuicksightGroup resource.
 */
export interface QuicksightGroupArgs {
    awsAccountId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    groupName: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
}
