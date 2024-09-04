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
    public static readonly __pulumiType = 'coder:index/app:App';

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

    /**
     * The `id` property of a `coder.Agent` resource to associate with.
     */
    public readonly agentId!: pulumi.Output<string>;
    /**
     * A command to run in a terminal opening this app. In the web, this will open in a new tab. In the CLI, this will SSH and
     * execute the command. Either `command` or `url` may be specified, but not both.
     */
    public readonly command!: pulumi.Output<string | undefined>;
    /**
     * A display name to identify the app. Defaults to the slug.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether `url` is opened on the client machine instead of proxied through the workspace.
     */
    public readonly external!: pulumi.Output<boolean | undefined>;
    /**
     * HTTP health checking to determine the application readiness.
     */
    public readonly healthcheck!: pulumi.Output<outputs.AppHealthcheck | undefined>;
    /**
     * A URL to an icon that will display in the dashboard. View built-in icons here:
     * https://github.com/coder/coder/tree/main/site/static/icon. Use a built-in icon with
     * `"${data.coder_workspace.me.access_url}/icon/<path>"`.
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * A display name to identify the app.
     *
     * @deprecated Deprecated
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The order determines the position of app in the UI presentation. The lowest order is shown first and apps with equal
     * order are sorted by name (ascending order).
     */
    public readonly order!: pulumi.Output<number | undefined>;
    /**
     * Specifies whether the URL will be accessed via a relative path or wildcard. Use if wildcard routing is unavailable.
     * Defaults to `true`.
     *
     * @deprecated Deprecated
     */
    public readonly relativePath!: pulumi.Output<boolean | undefined>;
    /**
     * Determines the level which the application is shared at. Valid levels are `"owner"` (default), `"authenticated"` and
     * `"public"`. Level `"owner"` disables sharing on the app, so only the workspace owner can access it. Level
     * `"authenticated"` shares the app with all authenticated users. Level `"public"` shares it with any user, including
     * unauthenticated users. Permitted application sharing levels can be configured site-wide via a flag on `coder server`
     * (Enterprise only).
     */
    public readonly share!: pulumi.Output<string | undefined>;
    /**
     * A hostname-friendly name for the app. This is used in URLs to access the app. May contain alphanumerics and hyphens.
     * Cannot start/end with a hyphen or contain two consecutive hyphens.
     */
    public readonly slug!: pulumi.Output<string>;
    /**
     * Determines whether the app will be accessed via it's own subdomain or whether it will be accessed via a path on Coder.
     * If wildcards have not been setup by the administrator then apps with `subdomain` set to `true` will not be accessible.
     * Defaults to `false`.
     */
    public readonly subdomain!: pulumi.Output<boolean | undefined>;
    /**
     * An external url if `external=true` or a URL to be proxied to from inside the workspace. This should be of the form
     * `http://localhost:PORT[/SUBPATH]`. Either `command` or `url` may be specified, but not both.
     */
    public readonly url!: pulumi.Output<string | undefined>;

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
            resourceInputs["agentId"] = state ? state.agentId : undefined;
            resourceInputs["command"] = state ? state.command : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["external"] = state ? state.external : undefined;
            resourceInputs["healthcheck"] = state ? state.healthcheck : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["relativePath"] = state ? state.relativePath : undefined;
            resourceInputs["share"] = state ? state.share : undefined;
            resourceInputs["slug"] = state ? state.slug : undefined;
            resourceInputs["subdomain"] = state ? state.subdomain : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as AppArgs | undefined;
            if ((!args || args.agentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentId'");
            }
            if ((!args || args.slug === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slug'");
            }
            resourceInputs["agentId"] = args ? args.agentId : undefined;
            resourceInputs["command"] = args ? args.command : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["external"] = args ? args.external : undefined;
            resourceInputs["healthcheck"] = args ? args.healthcheck : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["relativePath"] = args ? args.relativePath : undefined;
            resourceInputs["share"] = args ? args.share : undefined;
            resourceInputs["slug"] = args ? args.slug : undefined;
            resourceInputs["subdomain"] = args ? args.subdomain : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(App.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering App resources.
 */
export interface AppState {
    /**
     * The `id` property of a `coder.Agent` resource to associate with.
     */
    agentId?: pulumi.Input<string>;
    /**
     * A command to run in a terminal opening this app. In the web, this will open in a new tab. In the CLI, this will SSH and
     * execute the command. Either `command` or `url` may be specified, but not both.
     */
    command?: pulumi.Input<string>;
    /**
     * A display name to identify the app. Defaults to the slug.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies whether `url` is opened on the client machine instead of proxied through the workspace.
     */
    external?: pulumi.Input<boolean>;
    /**
     * HTTP health checking to determine the application readiness.
     */
    healthcheck?: pulumi.Input<inputs.AppHealthcheck>;
    /**
     * A URL to an icon that will display in the dashboard. View built-in icons here:
     * https://github.com/coder/coder/tree/main/site/static/icon. Use a built-in icon with
     * `"${data.coder_workspace.me.access_url}/icon/<path>"`.
     */
    icon?: pulumi.Input<string>;
    /**
     * A display name to identify the app.
     *
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    /**
     * The order determines the position of app in the UI presentation. The lowest order is shown first and apps with equal
     * order are sorted by name (ascending order).
     */
    order?: pulumi.Input<number>;
    /**
     * Specifies whether the URL will be accessed via a relative path or wildcard. Use if wildcard routing is unavailable.
     * Defaults to `true`.
     *
     * @deprecated Deprecated
     */
    relativePath?: pulumi.Input<boolean>;
    /**
     * Determines the level which the application is shared at. Valid levels are `"owner"` (default), `"authenticated"` and
     * `"public"`. Level `"owner"` disables sharing on the app, so only the workspace owner can access it. Level
     * `"authenticated"` shares the app with all authenticated users. Level `"public"` shares it with any user, including
     * unauthenticated users. Permitted application sharing levels can be configured site-wide via a flag on `coder server`
     * (Enterprise only).
     */
    share?: pulumi.Input<string>;
    /**
     * A hostname-friendly name for the app. This is used in URLs to access the app. May contain alphanumerics and hyphens.
     * Cannot start/end with a hyphen or contain two consecutive hyphens.
     */
    slug?: pulumi.Input<string>;
    /**
     * Determines whether the app will be accessed via it's own subdomain or whether it will be accessed via a path on Coder.
     * If wildcards have not been setup by the administrator then apps with `subdomain` set to `true` will not be accessible.
     * Defaults to `false`.
     */
    subdomain?: pulumi.Input<boolean>;
    /**
     * An external url if `external=true` or a URL to be proxied to from inside the workspace. This should be of the form
     * `http://localhost:PORT[/SUBPATH]`. Either `command` or `url` may be specified, but not both.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * The `id` property of a `coder.Agent` resource to associate with.
     */
    agentId: pulumi.Input<string>;
    /**
     * A command to run in a terminal opening this app. In the web, this will open in a new tab. In the CLI, this will SSH and
     * execute the command. Either `command` or `url` may be specified, but not both.
     */
    command?: pulumi.Input<string>;
    /**
     * A display name to identify the app. Defaults to the slug.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies whether `url` is opened on the client machine instead of proxied through the workspace.
     */
    external?: pulumi.Input<boolean>;
    /**
     * HTTP health checking to determine the application readiness.
     */
    healthcheck?: pulumi.Input<inputs.AppHealthcheck>;
    /**
     * A URL to an icon that will display in the dashboard. View built-in icons here:
     * https://github.com/coder/coder/tree/main/site/static/icon. Use a built-in icon with
     * `"${data.coder_workspace.me.access_url}/icon/<path>"`.
     */
    icon?: pulumi.Input<string>;
    /**
     * A display name to identify the app.
     *
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    /**
     * The order determines the position of app in the UI presentation. The lowest order is shown first and apps with equal
     * order are sorted by name (ascending order).
     */
    order?: pulumi.Input<number>;
    /**
     * Specifies whether the URL will be accessed via a relative path or wildcard. Use if wildcard routing is unavailable.
     * Defaults to `true`.
     *
     * @deprecated Deprecated
     */
    relativePath?: pulumi.Input<boolean>;
    /**
     * Determines the level which the application is shared at. Valid levels are `"owner"` (default), `"authenticated"` and
     * `"public"`. Level `"owner"` disables sharing on the app, so only the workspace owner can access it. Level
     * `"authenticated"` shares the app with all authenticated users. Level `"public"` shares it with any user, including
     * unauthenticated users. Permitted application sharing levels can be configured site-wide via a flag on `coder server`
     * (Enterprise only).
     */
    share?: pulumi.Input<string>;
    /**
     * A hostname-friendly name for the app. This is used in URLs to access the app. May contain alphanumerics and hyphens.
     * Cannot start/end with a hyphen or contain two consecutive hyphens.
     */
    slug: pulumi.Input<string>;
    /**
     * Determines whether the app will be accessed via it's own subdomain or whether it will be accessed via a path on Coder.
     * If wildcards have not been setup by the administrator then apps with `subdomain` set to `true` will not be accessible.
     * Defaults to `false`.
     */
    subdomain?: pulumi.Input<boolean>;
    /**
     * An external url if `external=true` or a URL to be proxied to from inside the workspace. This should be of the form
     * `http://localhost:PORT[/SUBPATH]`. Either `command` or `url` may be specified, but not both.
     */
    url?: pulumi.Input<string>;
}
