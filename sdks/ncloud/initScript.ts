// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InitScript extends pulumi.CustomResource {
    /**
     * Get an existing InitScript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InitScriptState, opts?: pulumi.CustomResourceOptions): InitScript {
        return new InitScript(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/initScript:InitScript';

    /**
     * Returns true if the given object is an instance of InitScript.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InitScript {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InitScript.__pulumiType;
    }

    public readonly content!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly initScriptNo!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly osType!: pulumi.Output<string>;

    /**
     * Create a InitScript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InitScriptArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InitScriptArgs | InitScriptState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InitScriptState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["initScriptNo"] = state ? state.initScriptNo : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["osType"] = state ? state.osType : undefined;
        } else {
            const args = argsOrState as InitScriptArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["initScriptNo"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InitScript.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InitScript resources.
 */
export interface InitScriptState {
    content?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    initScriptNo?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    osType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InitScript resource.
 */
export interface InitScriptArgs {
    content: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    osType?: pulumi.Input<string>;
}
