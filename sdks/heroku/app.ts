// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppState, opts?: pulumi.CustomResourceOptions): App {
        return new App(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'heroku:index/app:App';

    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is App {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === App.__pulumiType;
    }

    public readonly acm!: pulumi.Output<boolean>;
    public /*out*/ readonly allConfigVars!: pulumi.Output<{[key: string]: string}>;
    public readonly buildpacks!: pulumi.Output<string[]>;
    public readonly configVars!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly gitUrl!: pulumi.Output<string>;
    public /*out*/ readonly herokuHostname!: pulumi.Output<string>;
    public readonly internalRouting!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly organization!: pulumi.Output<outputs.AppOrganization | undefined>;
    public readonly region!: pulumi.Output<string>;
    public readonly sensitiveConfigVars!: pulumi.Output<{[key: string]: string}>;
    public readonly space!: pulumi.Output<string | undefined>;
    public readonly stack!: pulumi.Output<string>;
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    public /*out*/ readonly webUrl!: pulumi.Output<string>;

    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppArgs | AppState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppState | undefined;
            resourceInputs["acm"] = state ? state.acm : undefined;
            resourceInputs["allConfigVars"] = state ? state.allConfigVars : undefined;
            resourceInputs["buildpacks"] = state ? state.buildpacks : undefined;
            resourceInputs["configVars"] = state ? state.configVars : undefined;
            resourceInputs["gitUrl"] = state ? state.gitUrl : undefined;
            resourceInputs["herokuHostname"] = state ? state.herokuHostname : undefined;
            resourceInputs["internalRouting"] = state ? state.internalRouting : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["sensitiveConfigVars"] = state ? state.sensitiveConfigVars : undefined;
            resourceInputs["space"] = state ? state.space : undefined;
            resourceInputs["stack"] = state ? state.stack : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["webUrl"] = state ? state.webUrl : undefined;
        } else {
            const args = argsOrState as AppArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["acm"] = args ? args.acm : undefined;
            resourceInputs["buildpacks"] = args ? args.buildpacks : undefined;
            resourceInputs["configVars"] = args ? args.configVars : undefined;
            resourceInputs["internalRouting"] = args ? args.internalRouting : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["sensitiveConfigVars"] = args?.sensitiveConfigVars ? pulumi.secret(args.sensitiveConfigVars) : undefined;
            resourceInputs["space"] = args ? args.space : undefined;
            resourceInputs["stack"] = args ? args.stack : undefined;
            resourceInputs["allConfigVars"] = undefined /*out*/;
            resourceInputs["gitUrl"] = undefined /*out*/;
            resourceInputs["herokuHostname"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["webUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["allConfigVars", "sensitiveConfigVars"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(App.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering App resources.
 */
export interface AppState {
    acm?: pulumi.Input<boolean>;
    allConfigVars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    buildpacks?: pulumi.Input<pulumi.Input<string>[]>;
    configVars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    gitUrl?: pulumi.Input<string>;
    herokuHostname?: pulumi.Input<string>;
    internalRouting?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.AppOrganization>;
    region?: pulumi.Input<string>;
    sensitiveConfigVars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    space?: pulumi.Input<string>;
    stack?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    webUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    acm?: pulumi.Input<boolean>;
    buildpacks?: pulumi.Input<pulumi.Input<string>[]>;
    configVars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    internalRouting?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.AppOrganization>;
    region: pulumi.Input<string>;
    sensitiveConfigVars?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    space?: pulumi.Input<string>;
    stack?: pulumi.Input<string>;
}
