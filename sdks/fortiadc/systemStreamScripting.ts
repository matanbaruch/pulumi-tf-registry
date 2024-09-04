// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemStreamScripting extends pulumi.CustomResource {
    /**
     * Get an existing SystemStreamScripting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemStreamScriptingState, opts?: pulumi.CustomResourceOptions): SystemStreamScripting {
        return new SystemStreamScripting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/systemStreamScripting:SystemStreamScripting';

    /**
     * Returns true if the given object is an instance of SystemStreamScripting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemStreamScripting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemStreamScripting.__pulumiType;
    }

    public readonly mkey!: pulumi.Output<string>;
    public readonly script!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemStreamScripting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemStreamScriptingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemStreamScriptingArgs | SystemStreamScriptingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemStreamScriptingState | undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["script"] = state ? state.script : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as SystemStreamScriptingArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["script"] = args ? args.script : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemStreamScripting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemStreamScripting resources.
 */
export interface SystemStreamScriptingState {
    mkey?: pulumi.Input<string>;
    script?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemStreamScripting resource.
 */
export interface SystemStreamScriptingArgs {
    mkey: pulumi.Input<string>;
    script?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
