// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlbListener extends pulumi.CustomResource {
    /**
     * Get an existing AlbListener resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlbListenerState, opts?: pulumi.CustomResourceOptions): AlbListener {
        return new AlbListener(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/albListener:AlbListener';

    /**
     * Returns true if the given object is an instance of AlbListener.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlbListener {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlbListener.__pulumiType;
    }

    public readonly alpnPolicy!: pulumi.Output<string | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly certificateArn!: pulumi.Output<string | undefined>;
    public readonly defaultActions!: pulumi.Output<outputs.AlbListenerDefaultAction[]>;
    public readonly loadBalancerArn!: pulumi.Output<string>;
    public readonly mutualAuthentication!: pulumi.Output<outputs.AlbListenerMutualAuthentication | undefined>;
    public readonly port!: pulumi.Output<number | undefined>;
    public readonly protocol!: pulumi.Output<string>;
    public readonly sslPolicy!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.AlbListenerTimeouts | undefined>;

    /**
     * Create a AlbListener resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlbListenerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlbListenerArgs | AlbListenerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlbListenerState | undefined;
            resourceInputs["alpnPolicy"] = state ? state.alpnPolicy : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["certificateArn"] = state ? state.certificateArn : undefined;
            resourceInputs["defaultActions"] = state ? state.defaultActions : undefined;
            resourceInputs["loadBalancerArn"] = state ? state.loadBalancerArn : undefined;
            resourceInputs["mutualAuthentication"] = state ? state.mutualAuthentication : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["sslPolicy"] = state ? state.sslPolicy : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AlbListenerArgs | undefined;
            if ((!args || args.defaultActions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultActions'");
            }
            if ((!args || args.loadBalancerArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerArn'");
            }
            resourceInputs["alpnPolicy"] = args ? args.alpnPolicy : undefined;
            resourceInputs["certificateArn"] = args ? args.certificateArn : undefined;
            resourceInputs["defaultActions"] = args ? args.defaultActions : undefined;
            resourceInputs["loadBalancerArn"] = args ? args.loadBalancerArn : undefined;
            resourceInputs["mutualAuthentication"] = args ? args.mutualAuthentication : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["sslPolicy"] = args ? args.sslPolicy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlbListener.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlbListener resources.
 */
export interface AlbListenerState {
    alpnPolicy?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    certificateArn?: pulumi.Input<string>;
    defaultActions?: pulumi.Input<pulumi.Input<inputs.AlbListenerDefaultAction>[]>;
    loadBalancerArn?: pulumi.Input<string>;
    mutualAuthentication?: pulumi.Input<inputs.AlbListenerMutualAuthentication>;
    port?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    sslPolicy?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.AlbListenerTimeouts>;
}

/**
 * The set of arguments for constructing a AlbListener resource.
 */
export interface AlbListenerArgs {
    alpnPolicy?: pulumi.Input<string>;
    certificateArn?: pulumi.Input<string>;
    defaultActions: pulumi.Input<pulumi.Input<inputs.AlbListenerDefaultAction>[]>;
    loadBalancerArn: pulumi.Input<string>;
    mutualAuthentication?: pulumi.Input<inputs.AlbListenerMutualAuthentication>;
    port?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    sslPolicy?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.AlbListenerTimeouts>;
}
